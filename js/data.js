var hours = {
	'one'   : [{name:'One'}],
	'two'   : [{name:'One'},{name:'Two'}],
	'three' : [{name:'One'},{name:'Two'},{name:'Three'}],
	'four'  : [{name:'One'},{name:'Two'},{name:'Three'},{name:'Four'}],
	'five'  : [{name:'One'},{name:'Two'},{name:'Three'},{name:'Four'},{name:'Five'}],
	'six'   : [{name:'One'},{name:'Two'},{name:'Three'},{name:'Four'},{name:'Five'},{name:'Six'}],
	'seven' : [{name:'One'},{name:'Two'},{name:'Three'},{name:'Four'},{name:'Five'},{name:'Six'},{name:'Seven'}],
	'eight' : [{name:'One'},{name:'Two'},{name:'Three'},{name:'Four'},{name:'Five'},{name:'Six'},{name:'Seven'},{name:'Eight'}],
	'nine'  : [{name:'One'},{name:'Two'},{name:'Three'},{name:'Four'},{name:'Five'},{name:'Six'},{name:'Seven'},{name:'Eight'},{name:'Nine'}],
	'ten'   : [{name:'One'},{name:'Two'},{name:'Three'},{name:'Four'},{name:'Five'},{name:'Six'},{name:'Seven'},{name:'Eight'},{name:'Nine'},{name:'Ten'}],
	'eleven': [{name:'One'},{name:'Two'},{name:'Three'},{name:'Four'},{name:'Five'},{name:'Six'},{name:'Seven'},{name:'Eight'},{name:'Nine'},{name:'Ten'},{name:'Eleven'}],
	'twelve': [{name:'One'},{name:'Two'},{name:'Three'},{name:'Four'},{name:'Five'},{name:'Six'},{name:'Seven'},{name:'Eight'},{name:'Nine'},{name:'Ten'},{name:'Eleven'},{name:'Twelve'}]
}

var groups = {
	'one'   : [{name:'One'}],
	'two'   : [{name:'One'},{name:'Two'}],
	'three' : [{name:'One'},{name:'Two'},{name:'Three'}],
	'four'  : [{name:'One'},{name:'Two'},{name:'Three'},{name:'Four'}],
	'five'  : [{name:'One'},{name:'Two'},{name:'Three'},{name:'Four'},{name:'Five'}],
	'six'   : [{name:'One'},{name:'Two'},{name:'Three'},{name:'Four'},{name:'Five'},{name:'Six'}],
	'seven' : [{name:'One'},{name:'Two'},{name:'Three'},{name:'Four'},{name:'Five'},{name:'Six'},{name:'Seven'}],
	'eight' : [{name:'One'},{name:'Two'},{name:'Three'},{name:'Four'},{name:'Five'},{name:'Six'},{name:'Seven'},{name:'Eight'}],
	'nine'  : [{name:'One'},{name:'Two'},{name:'Three'},{name:'Four'},{name:'Five'},{name:'Six'},{name:'Seven'},{name:'Eight'},{name:'Nine'}],
	'ten'   : [{name:'One'},{name:'Two'},{name:'Three'},{name:'Four'},{name:'Five'},{name:'Six'},{name:'Seven'},{name:'Eight'},{name:'Nine'},{name:'Ten'}],
	'eleven': [{name:'One'},{name:'Two'},{name:'Three'},{name:'Four'},{name:'Five'},{name:'Six'},{name:'Seven'},{name:'Eight'},{name:'Nine'},{name:'Ten'},{name:'Eleven'}],
	'twelve': [{name:'One'},{name:'Two'},{name:'Three'},{name:'Four'},{name:'Five'},{name:'Six'},{name:'Seven'},{name:'Eight'},{name:'Nine'},{name:'Ten'},{name:'Eleven'},{name:'Twelve'}]
}

// plant(crop('peas', groups['two'], {cx:100, cy:100}), plot)
// plant(seedingPlan(season), plot);
// plant(buildGroup('six', groups, {cx:50, cy:50}), plot);

var dataset = [
  { label: 'Bang Hai', count: 20 },
  { label: 'Lions den', count: 20 },
  { label: 'Crew', count: 20 },
  { label: 'Robotika', count: 20 },
  { label: 'Town Hall', count: 20 },
  { label: 'Sector 6', count: 20 }
];

var data = {
	set1: [{ label: 'Bang Hai', count: 20 }],
	set2: [{ label: 'Bang Hai', count: 20 },{ label: 'Lions den', count: 20 }],
	set3: [{ label: 'Bang Hai', count: 20 },{ label: 'Lions den', count: 20 },{ label: 'Crew', count: 20 }],
	set4: [{ label: 'Bang Hai', count: 20 },{ label: 'Lions den', count: 20 },{ label: 'Crew', count: 20 },{ label: 'Robotika', count: 20 }],
	set5: [{ label: 'Bang Hai', count: 20 },{ label: 'Lions den', count: 20 },{ label: 'Crew', count: 20 },{ label: 'Robotika', count: 20 },{ label: 'Town Hall', count: 20 }],
	set6: [{ label: 'Bang Hai', count: 20 },{ label: 'Lions den', count: 20 },{ label: 'Crew', count: 20 },{ label: 'Robotika', count: 20 },{ label: 'Town Hall', count: 20 },{ label: 'Sector 6', count: 20 }]
}
