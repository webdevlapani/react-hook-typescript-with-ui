import * as React from 'react';
import { useDispatch } from 'react-redux';
import {addNewItem, editItem} from "../../../actions/ItemActions";
import {IItem,} from "../../../common/interface/Item";
import {Button, InputGroup, Label} from '@blueprintjs/core';
import {handleNumberChange, handleStringChange} from '@blueprintjs/docs-theme';

interface IItemAdd {
  // On successfully create user
  onAdd(): void
  // SelectedItem
  selectedItem?: IItem
}

const ItemCreate = (props: IItemAdd) => {

  // Handle state for name
  const [name, setName] = React.useState('');
  // Handle state for price
  const [price, setPrice] = React.useState(0);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (props.selectedItem) {
      setName(props.selectedItem.name);
      setPrice(props.selectedItem.price);
    }
  }, [props.selectedItem]);

  /**
   * Create or Edit item
   */
  const createOrEditItem = () => {
    if (!props.selectedItem) {
      dispatch(addNewItem({ id: +new Date(), name, price }));
    } else {
      dispatch(editItem({ ...props.selectedItem, name, price }));
    }

    setName('');
    setPrice(0);
    props.onAdd();
  }

  return (
      <React.Fragment>
        <Label>
          Item Name
          <InputGroup
            large
            width={"250px"}
            name="name"
            onChange={handleStringChange((name) => setName(name))}
            placeholder="Item Name"
            value={name}
          />
        </Label>
        <Label>
          Item Price
          <InputGroup
            width={"250px"}
            large
            type="number"
            name="price"
            onChange={handleNumberChange((price) => setPrice(price))}
            placeholder="Item Price"
            value={price.toString()}
          />
        </Label>
        <Button
          className="addbtn"

          large
          onClick={createOrEditItem}
        >
          { !props.selectedItem ? 'Add' : 'Edit' }
        </Button>
      </React.Fragment>
  )
}

export default ItemCreate;