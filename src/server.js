import app from './app';
import lib from 'pipedrive';

lib.Configuration.apiToken = `${process.env.PIPEDRIVE_API_KET}`;

app.listen(1800);

app.listen(3333);
