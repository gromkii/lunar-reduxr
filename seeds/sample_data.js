
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('posts').insert({
          post_text:'The key to success is to keep your head above the water, never give up. Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel. Wraith talk. They will try to close the door on you, just open it. You smart, you loyal, you a genius. Don’t ever play yourself. They don’t want us to win. I’m giving you cloth talk, cloth. Special cloth alert, cut from a special cloth. Surround yourself with angels.',
        }),
        knex('posts').insert({
          post_text:'The key to success is to keep your head above the water, never give up. Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel. Wraith talk. They will try to close the door on you, just open it. You smart, you loyal, you a genius. Don’t ever play yourself. They don’t want us to win. I’m giving you cloth talk, cloth. Special cloth alert, cut from a special cloth. Surround yourself with angels.',
        }),
        knex('posts').insert({
          post_text:'The key to success is to keep your head above the water, never give up. Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel. Wraith talk. They will try to close the door on you, just open it. You smart, you loyal, you a genius. Don’t ever play yourself. They don’t want us to win. I’m giving you cloth talk, cloth. Special cloth alert, cut from a special cloth. Surround yourself with angels.',
        })
      ]);
    });
};
