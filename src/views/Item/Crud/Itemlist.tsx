import * as React from 'react';
import {IItem} from "../../../common/interface/Item";
import {deleteItem, selectItem,} from "../../../actions/ItemActions";
import { useDispatch } from  "react-redux";
import {Button, Divider, InputGroup, Label} from '@blueprintjs/core';
import {handleNumberChange} from '@blueprintjs/docs-theme';
import {useState} from 'react';

// Register all props of component here
interface IItemListProps {
  // itemlist
  itemList: IItem[];
  // On edit call
  onEdit(): void
}

export const Itemlist = (props: IItemListProps) => {

  const [tax, setTax] = useState(0);

  const price = props.itemList.reduce((a, b) => a + (b['price'] || 0), 0);

  const dispatch = useDispatch();

  /**
   * Delete item based on itemId
   * @param itemId
   */
  const onDelete = (itemId: number) => {
    dispatch(deleteItem(itemId));
  }

  /**
   * Select item based on itemId
   * @param itemId
   */
  const onEdit = (itemId: number) => {
    dispatch(selectItem(itemId));
    props.onEdit() ;
  }


  // @ts-ignore
  return <div className="table">
    <table className="bp3-html-table .modifier">
      <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Price</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
      </thead>
      <tbody>
      {
        props.itemList.map((item: IItem, index: number) =>
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td><Button  small icon="edit" onClick={() => onEdit(item.id)}>Edit</Button></td>
            <td><Button  small icon="delete" onClick={() => onDelete(item.id)}>Delete</Button></td>
          </tr>
        )
      }
      </tbody>
    </table>
      <Divider/>
      <h3>Price : {price}</h3>
    <Label>
      Tax (%)
        <InputGroup
            width={"250px"}
            large
            type="number"
            name="price"
            onChange={handleNumberChange((tax) => setTax(tax))}
            placeholder="Tax (%)"
            value={tax.toString()}
          />
    </Label>
      <h3>Payable amount : {   price- (price * tax /100) }</h3>
  </div>


}

export default Itemlist;