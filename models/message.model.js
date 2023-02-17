import mongoose from 'mongoose';
import moment from 'moment';

const messageSchema = new mongoose.Schema(
  {
    room: {
      type: String,
      required: true,
    },
    message: {
      type: String,
    },
    username: {
      type: String,
    },
    time: {
      type: String,
    },
  },
  { timestamps: true }
);

const Message = mongoose.model('message', messageSchema);

export const createMessage = async (data) => {
  return await Message.create(data);
};

export const fetchMessage = async (room) => {
  const data = await Message.find({ room: room })
    .select({ room: 1, message: 1, username: 1, time: 1 })
    .sort({ createdAt: -1 })
    .limit(20);
  console.log('datakjbfk======>>>>>>', data);
  return data;
};
