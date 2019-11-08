import React, { Fragment } from 'react';
import MyContext from './MyContext';
import Car from './Car';

const Cars = props => {
  return (
    <MyContext.Consumer>
      {context => (
        <Fragment>
          <h4>Cars:</h4>
          {context.cars &&
            Object.keys(context.cars).map(carID => (
              <Car
                key={carID}
                name={context.cars[carID].name}
                price={context.cars[carID].price}
                incrementPrice={() => context.incrementCarPrice(carID)}
                decrementPrice={() => context.decrementCarPrice(carID)}
              />
            ))}
        </Fragment>
      )}
    </MyContext.Consumer>
  );
};

export default Cars;
