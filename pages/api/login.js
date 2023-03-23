export default function handler(req, res) {
  if (req) res.status(200).json({ name: 'John Doe' });
}
