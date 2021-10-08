import { MongooseModule } from '@nestjs/mongoose';

const Mongoose = MongooseModule.forRoot(`mongodb://localhost/${process.env.DB_NAME}`)

export default Mongoose;
