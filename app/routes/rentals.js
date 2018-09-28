import Route from '@ember/routing/route';

export default Route.extend({

	model(){
		return [{
			id:'the-grand-hayatt',
			title:'The Grand Hayatt',
			owner:'idk',
			city:'Boston',
			category:'Apartment',
			floors: 15,
			image:'assets//images/the-grand-hayatt.jpg',
			description:'Hyatt Hotels Corporation is an American multinational hospitality company that manages and franchises of luxury hotels, resorts, and vacation properties.'
		},{
			id:'marriott',
			title:'The Marriott',
			owner:'idk',
			city:'Boston',
			category:'Condo',
			floors: 6,
			image:'assets//images/marriott.jpg',
			description:'Marriott International is an American multinational diversified hospitality company that manages and franchises a broad portfolio of hotels and related lodging facilities.'
		},{
			id:'the-sheraton',
			title:'The Sheraton',
			owner:'idk',
			city:'Boston',
			category:'Bunglow',
			floors: 12,
			image:'assets//images/sheraton.jpg',
			description:'Sheraton Hotels and Resorts is an international hotel chain owned by Marriott International. Sheraton currently operates over 500 hotels globally, including locations in North America, Africa, Asia.'
		}];
	}
});
