const convertDealToXml = ({ name, code, title, unitValue }) => `
  <?xml version="1.0" encoding="ISO-8859-1"?>
    <pedido>
      <cliente>
          <nome>${name}</nome>
      </cliente>
      <transporte>
        <volume>
          <servico>digital</servico>
        </volume>
      </transporte>
      <itens>
          <item>
              <codigo>${code}</codigo>
              <descricao>${title}</descricao>
              <qtde>1</qtde>
              <vlr_unit>${unitValue}</vlr_unit>
              <vlr>1</vlr>
          </item>
      </itens>
    </pedido>
  `;

export default convertDealToXml;
