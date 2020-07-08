import Order from '../schemas/Order';
import { post } from 'axios';
import { DealsController } from 'pipedrive';
import { BLING_CONSTANTS } from '../../utils/constants';
import { v4 as uuidv4 } from 'uuid';
import converDealToXml from '../../utils/xmlConverter';

class OrderController {
  async create(req, res) {
    try {
      const { status } = req.query;
      let deal = await DealsController.getAllDeals(status);
      if (!deal) {
        return res.status(400).json({ message: 'Envie um status válido' });
      }
      deal = deal.data[0];

      const order = {
        name: deal.owner_name,
        code: uuidv4(),
        title: deal.title,
        unitValue: deal.value,
      };

      const orderXmlConverted = converDealToXml(order);

      const {
        data: { retorno: dataReturn },
      } = await post(
        `${BLING_CONSTANTS.BLING_URL}/pedido/json/?apikey=${BLING_CONSTANTS.BLING_API_KEY}&xml=${orderXmlConverted}`
      );

      const { pedidos: orders, erros: errors } = dataReturn;

      if (errors) {
        return res.json(errors);
      }

      await Order.create({
        id_order: deal.stage_id,
        customer: {
          name: deal.owner_name,
        },
        item: {
          code: order.code,
          description: deal.title,
          currency: deal.weighted_value_currency,
          total_value: deal.weighted_value,
        },
      });
      return res.status(200);
    } catch (error) {}
  }

  async index(req, res) {
    const deal = await Order.find();

    return res.json({ deal });
  }
}

export default new OrderController();
