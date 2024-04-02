require('dotenv').config();
import app from './config/app';

const port = process.env.PORT || 5000;
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running at port ${port}...`);
});
