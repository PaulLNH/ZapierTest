const should = require('should');

const zapier = require('zapier-platform-core');

// Use this to make test calls into your app:
const App = require('../index');
const appTester = zapier.createAppTester(App);

describe('My App', () => {

  it('should load recipes', (done) => {
      const bundle = {
          inputData: {
              style: 'mediterranean'
          }
      };

      appTester(App.triggers.recipe.operation.perform, bundle)
      .then(results => {
          should(results.length).above(1);
          
          const firstResult = results[0];
          console.log(`Test result: ${JSON.stringify(firstResult)}`);
          should(firstResult.name).eql('name 1');
          should(firstResult.directions).eql('directions 1');

          done();
      })
      .catch(done);
  });

});
