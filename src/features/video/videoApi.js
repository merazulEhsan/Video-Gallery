import axios from "../../utils/axios";

export const getVideo = async (id) => {
  const response = await axios.get(`/videos/${id}`);

  return response.data;
};

export const patchVideoLike = async ({ id, like }) => {
  const updatelike = { likes: like };
  const response = await axios.patch(`/videos/${id}`, updatelike);
  return response.data;
};

export const patchVideoUnlike = async ({ id, unlike }) => {
  const updateUnlike = { unlikes: unlike };
  const response = await axios.patch(`/videos/${id}`, updateUnlike);
  return response.data;
};
