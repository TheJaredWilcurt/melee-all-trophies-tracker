const appId = 'VAH15Ghi76jHV752kjID6B3QqZDDw08mC2oWygLb';
const jsKey = 'mrzVvSeeaFIN2GEPnPkRr18WykoV7fsh00nEhgAs';
const parseApiAddress = 'https://parseapi.back4app.com/';
const webSocketAddress = 'ws://meleetrophytracker.b4a.io';

Parse.initialize(appId, jsKey);
Parse.serverURL = parseApiAddress;
Parse.liveQueryServerURL = webSocketAddress;

const ws = {
  sub: async function () {
    console.log('Starting app');
    let query = new Parse.Query('acquired');
    try {
      let subscription = await query.subscribe();
      subscription.on('open', function () {
        console.log('Connection open');
      });
      subscription.on('create', function (obj) {
        console.log('Object created', obj.get('acquiredValues'));
      });
      subscription.on('update', function (obj) {
        console.log('Object updated', obj.get('acquiredValues'));
      });
      subscription.on('enter', function (obj) {
        console.log('Object entered', obj.get('acquiredValues'));
      });
      subscription.on('leave', function (obj) {
        console.log('Object left', obj.get('acquiredValues'));
      });
      subscription.on('delete', function (obj) {
        console.log('Object deleted', obj.get('acquiredValues'));
      });
    } catch (err) {
      console.log('Error', err);
    }
  },
  save: async function () {
    const id = 'DjlhvAw0Ai';

    let query = new Parse.Query('acquired');
    query.equalTo('objectId', id);
    const record = await query.first();
    record.set('acquiredValues', { t: 'okay', b: 'cool' });
    await record.save();
  }
};

// ws.save();
