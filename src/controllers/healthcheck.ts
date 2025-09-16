export const healthcheckController = (_req, res) => {
  res.status(200).json({ message: 'API is running' });
};