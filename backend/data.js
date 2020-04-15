exports.users = [
  {
    id: "u1",
    name: "Christophe",
    places: 2,
    image:
      "https://images.unsplash.com/photo-1552072805-2a9039d00e57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "u2",
    name: "Idalia",
    places: 1,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "u3",
    name: "Nicole",
    places: 3,
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "u4",
    name: "Noah",
    places: 4,
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  }
];

exports.places = [
  {
    id:'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://images.unsplash.com/photo-1550664890-c5e34a6cad31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    address: '20 W 34th St, New York, NY 10001',
    location:{
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u1'
  },
  {
    id:'p2',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://images.unsplash.com/photo-1543969082-0d5eb654c698?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    address: '20 W 34th St, New York, NY 10001',
    location:{
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u2'
  },
  {
    id:'p3',
    title: 'Eiffel Tower',
    description: "Constructed from 1887 to 1889 as the entrance to the 1889 World's Fair, it was initially criticised by some of France's leading artists and intellectuals for its design, but it has become a global cultural icon of France and one of the most recognisable structures in the world. The Eiffel Tower is the most-visited paid monument in the world; 6.91 million people ascended it in 2015. ",
    imageUrl: 'https://images.unsplash.com/photo-1549271456-0c1e6f59ab66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    address: 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France',
    location:{
      lat: 48.8539241,
      lng: 2.2913515
    },
    creator: 'u2'
  },

]