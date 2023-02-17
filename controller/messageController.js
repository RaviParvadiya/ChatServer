import { fetchMessage } from '../models/message.model.js';

export const fetch = async (req, res) => {
  try {
    let room = req.body.room;
    const data = await fetchMessage(room);
    if (!data) {
      return res
        .status(404)
        .send({ status: false, message: 'no such data found ' });
    }
    return res
      .status(200)
      .send({ status: true, message: 'message data', data: data });
  } catch (error) {
    return res.status(500).send({ status: true, error: error.message });
  }
};
