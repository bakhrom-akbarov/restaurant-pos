import React from 'react';
import { FixedSizeList as List } from 'react-window';
import { FieldArray, FieldArrayRenderProps } from 'formik';
import styled from 'styled-components';

const MenuItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
`;

const MenuItemName = styled.span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const MenuItemPrice = styled.span`
  margin-right: 16px;
  white-space: nowrap;
`;

const AddButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  white-space: nowrap;
`;

const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const QuantityButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px;
  cursor: pointer;
`;

const QuantityDisplay = styled.span`
  margin: 0 8px;
  width: 50px;
  text-align: center;
`;

const EmptyMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 16px;
  color: #777;
`;

type MenuItem = {
  id: number;
  name: string;
  price: number;
};

type MenuListProps = {
  items: MenuItem[];
  name: string;
};

type RowProps = {
  index: number;
  style: React.CSSProperties;
  data: {
    items: MenuItem[];
    basket: any[];
    push: (item: any) => void;
    remove: (index: number) => void;
    setFieldValue: (field: string, value: any) => void;
  };
};

const Row: React.FC<RowProps> = ({ index, style, data }) => {
  const { items, basket, push, remove, setFieldValue } = data;
  const item = items[index];
  const basketIndex = basket.findIndex(
    (basketItem: MenuItem & { quantity: number }) => basketItem.id === item.id,
  );
  const inBasket = basketIndex !== -1;

  const handleAdd = () => {
    push({ ...item, quantity: 1 });
  };

  const handleIncrement = () => {
    const newQuantity = basket[basketIndex].quantity + 1;
    setFieldValue(`meals[${basketIndex}].quantity`, newQuantity);
  };

  const handleDecrement = () => {
    const newQuantity = basket[basketIndex].quantity - 1;
    if (newQuantity > 0) {
      setFieldValue(`meals[${basketIndex}].quantity`, newQuantity);
    } else {
      remove(basketIndex);
    }
  };

  return (
    <MenuItemWrapper style={style}>
      <MenuItemName>{item.name}</MenuItemName>
      <MenuItemPrice>${item.price.toFixed(2)}</MenuItemPrice>
      {!inBasket ? (
        <AddButton type="button" onClick={handleAdd}>
          Add to Basket
        </AddButton>
      ) : (
        <QuantityWrapper>
          <QuantityButton type="button" onClick={handleDecrement}>
            -
          </QuantityButton>
          <QuantityDisplay>{basket[basketIndex].quantity}</QuantityDisplay>
          <QuantityButton type="button" onClick={handleIncrement}>
            +
          </QuantityButton>
        </QuantityWrapper>
      )}
    </MenuItemWrapper>
  );
};

export const MenuList: React.FC<MenuListProps> = ({ items, name }) => {
  return (
    <FieldArray name={name}>
      {({ push, remove, form }: FieldArrayRenderProps) => {
        const { values, setFieldValue } = form;
        const basket = values[name] || [];

        if (items.length === 0) {
          return <EmptyMessage>No items available</EmptyMessage>;
        }

        return (
          <div style={{ height: '100%' }}>
            <List
              height={400}
              itemCount={items.length}
              itemSize={50}
              width="100%"
              itemData={{ items, basket, push, remove, setFieldValue }}>
              {Row}
            </List>
          </div>
        );
      }}
    </FieldArray>
  );
};
