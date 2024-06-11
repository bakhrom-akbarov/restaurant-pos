import React, { CSSProperties, useState } from 'react';
import { FixedSizeList as List } from 'react-window';
import styled from 'styled-components';

type Column<T> = {
  label: string;
  dataKey: string;
  width: number | string;
  align?: 'left' | 'center' | 'right'; // New align property
  render?: (value: any, row: T) => React.ReactNode; // New render property
};

type RowData = {
  [key: string]: any;
};

export type VirtualizedTableColumns<T> = Column<T>[];

type VirtualizedTableProps<T> = {
  columns: VirtualizedTableColumns<T>;
  data: T[];
  rowHeight?: number;
  onRowClick?: (row: T) => void;
};

type RowProps<T> = {
  index: number;
  style: CSSProperties;
  data: {
    columns: Column<T>[];
    rows: T[];
    onRowClick?: (row: T) => void;
    activeRowIndex: number | null;
    setActiveRowIndex: React.Dispatch<React.SetStateAction<number | null>>;
  };
};

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  background-color: #f5f5f5;
  font-weight: bold;
`;

const Cell = styled.div<{
  width: number | string;
  isFlexible: boolean;
  align?: 'left' | 'center' | 'right';
}>`
  flex: ${(props) => (props.isFlexible ? '1' : `0 0 ${props.width}px`)};
  padding: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-bottom: 1px solid #ddd;
  text-align: ${(props) => props.align || 'left'}; // Apply alignment
`;

const Row = styled.div<{ isActive: boolean }>`
  display: flex;
  width: 100%;
  background-color: ${(props) => (props.isActive ? '#e0f7fa' : '#fff')};
  cursor: pointer;

  &:hover {
    background-color: #e0f7fa;
  }
`;

const getNestedValue = (obj: RowData, path: string): any => {
  return path.split('.').reduce((o, p) => (o ? o[p] : undefined), obj);
};

const VirtualizedTable = <T extends RowData>({
  columns,
  data,
  rowHeight = 40,
  onRowClick,
}: VirtualizedTableProps<T>) => {
  const [activeRowIndex, setActiveRowIndex] = useState<number | null>(null);

  const RowRenderer: React.FC<RowProps<T>> = ({
    index,
    style,
    data: { columns, rows, onRowClick, activeRowIndex, setActiveRowIndex },
  }) => {
    const row = rows[index];
    const isActive = index === activeRowIndex;

    return (
      <Row
        style={style}
        isActive={isActive}
        onClick={() => {
          setActiveRowIndex(index);
          if (onRowClick) onRowClick(row);
        }}>
        {columns.map((column) => {
          const value = getNestedValue(row, column.dataKey);
          return (
            <Cell
              key={column.dataKey}
              width={column.width}
              isFlexible={column.width === '100%'}
              align={column.align} // Pass align property
            >
              {column.render ? column.render(value, row) : value}
            </Cell>
          );
        })}
      </Row>
    );
  };

  return (
    <TableWrapper>
      <Header>
        {columns.map((column) => (
          <Cell
            key={column.dataKey}
            width={column.width}
            isFlexible={column.width === '100%'}
            align={column.align} // Pass align property
          >
            {column.label}
          </Cell>
        ))}
      </Header>
      <List
        height={400}
        itemCount={data.length}
        itemSize={rowHeight}
        width="100%"
        itemData={{
          columns,
          rows: data,
          onRowClick,
          activeRowIndex,
          setActiveRowIndex,
        }}>
        {RowRenderer}
      </List>
    </TableWrapper>
  );
};

export default VirtualizedTable;
