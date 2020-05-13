import * as React from 'react';
import Itemlist  from "./Crud/Itemlist";
import {useDispatch, useSelector} from 'react-redux'
import {IRootReducer} from "../../reducers";
import ItemCreate from "./Crud/ItemCreate";
import {selectItem} from "../../actions/ItemActions";
import {Button, Card, Divider, Elevation, Navbar} from '@blueprintjs/core';
import {Alignment} from '@blueprintjs/core/lib/esm/common/alignment';

export const Item = () => {

  // Handle state for show create user component
  const [showCreate, setShowCreate] = React.useState(false);

  const dispatch = useDispatch();

  // State of item reducer
  const itemReducer = useSelector( (state: IRootReducer) => state.itemReducer);

  /**
   * Handle on create
   */
  const onCreate = () => {
    setShowCreate(false);
    dispatch(selectItem(0));
  }

  return (
      <React.Fragment>
        <Navbar className="bp3-dark">
          <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>Restaurant Receipt Builder</Navbar.Heading>
          </Navbar.Group>
        </Navbar>
        <div>.
          <Card interactive={true} elevation={Elevation.TWO}>
            <Button
              large
              icon="add"
              onClick={() => setShowCreate(true)}>
              Add New Item
            </Button>
            <Divider />

            { showCreate && <ItemCreate selectedItem={itemReducer.selectedItem} onAdd={onCreate} /> }

          </Card>
        </div>
        {itemReducer.itemList.length ? <Itemlist onEdit={() => setShowCreate(true)} itemList={itemReducer.itemList}/> : null}
      </React.Fragment>
  )
}

export default Item;