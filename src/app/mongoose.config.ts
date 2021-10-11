import { MongooseModule } from '@nestjs/mongoose';

// const Mongoose = MongooseModule.forRoot(`mongodb://localhost/${process.env.DB_NAME}`)
const Mongoose = MongooseModule.forRoot(`mongodb://localhost/root`)

export default Mongoose;
