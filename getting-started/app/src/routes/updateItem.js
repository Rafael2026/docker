const db = require('../persistence');
const sanitize = require('sanitize-html');

module.exports = async (req, res) => {
  await db.updateItem(req.params.id, {
    name: req.body.name,
    completed: req.body.completed,
  });

  const item = await db.getItem(req.params.id);

  // Sanitize the item before sending it back to the client.
  item.name = sanitize(item.name);
  item.completed = sanitize(item.completed);

  // Render the item as a HTML template.
  res.render('item.html', { item });
};
