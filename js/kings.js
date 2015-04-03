$().ready(function(){
  init_game();
});

var deck, next_button, reset_button, card_view, action_view;
var action_map = {
  'A': 'Waterfall: Keep drinking til the person on your right finishes drinking.',
	'2': 'You: Pick someone to drink.',
	'3': 'Me: You drink.',
	'4': 'Whores: Girls drink.',
	'5': 'Never have I ever or Table Slap.',
	'6': 'Dicks: Guys drink.',
	'7': 'Heaven: All players reach for the sky, last person drinks.',
	'8': 'Mate: pick a partner who has to drink whenever you drink.',
	'9': 'Rhyme: Pick a word. Everyone says a word that rhymes with it.',
	'10': 'Categories: Pick a category. Everyone says something in the category.',
	'J': 'Rule: Make a rule',
	'Q': 'Questions or Viking Power',
	'K': 'King\'s Cup: Pour some beer in the king\'s cup, or drink it.'
};

function init_game(){
  connect_buttons();
  connect_views();

  make_deck();
  next_button.click();
}

function connect_buttons(){
  next_button = $('#next_card_button');
  next_button.click(function(event){
    event.preventDefault();

    // TODO - deck empty
    // TODO - last king drawn

    var card = deck.pop()
    card_view.html(card);
    action_view.html( action_map[card] );
  });

  reset_button = $('#reset_button');
  reset_button.click(function(event){
    event.preventDefault();

    console.log("TODO - reset");
  });
}

function connect_views(){
  card_view = $('#card_view');
  action_view = $('#action_view');
}

function make_deck(){
  deck = [];
  _(4).times(function(){ deck = deck.concat( _(action_map).keys() )});
  deck = _(deck).shuffle();
}
