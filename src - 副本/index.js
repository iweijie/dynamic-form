import React, { useCallback } from 'react';
import { IndexModelState, ConnectRC, Loading, connect } from 'umi';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { map, find, get, cloneDeep } from 'lodash';

import { GlobalContext } from './context';
import LeftSide from '@/components/LeftSide';
import RightSide from '@/components/RightSide';
import ActionBar from '@/components/ActionBar';
import Nav from '@/components/Nav';

import Form from './toyBricks/Form';
import Icon from './toyBricks/Icon';
import renderComponent from './toyBricks/renderComponent';
// import Container from '@/components/Container';
import Test from './test';
import styles from './index.less';
import json from './json';

import * as ComMap from './toyBricks/autoImport';

console.log('.....', ComMap);

const getContainerForClone = (...res) => {
  console.log(res);
  return <div>1111</div>;
};

const DynamicFormConfig = ({ components, dispatch, items }) => {
  const handleDragEnd = useCallback((result) => {
    const { draggableId, destination, source } = result;
    if (!destination) return;
    const { droppableId } = source;
    if (get(source, 'droppableId') === get(destination, 'droppableId')) {
      dispatch({
        type: 'form/updateItems',
        payload: {
          source: get(source, 'index', 0),
          target: get(destination, 'index', 0),
        },
      });
    } else {
      const dragItem = get(
        get(
          find(components, (item) => item.type === droppableId),
          'children',
          [],
        ),
        source.index,
      );
      if (!dragItem) return;
      dispatch({
        type: 'form/addItem',
        payload: {
          item: cloneDeep(dragItem),
          target: get(destination, 'index', 0),
        },
      });
    }
  }, []);

  const handleDragStart = useCallback((result) => {
    // console.log('handleDragStart', result);
  }, []);

  return (
    <>
      <Nav />
      <DragDropContext
        // getContainerForClone={getContainerForClone}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        // onDragUpdate={handleDragUpdate}
      >
        <div className={styles['dynamic-form']}>
          <LeftSide components={components} />
          {/* <Container>{FormContainer.render({ items })}</Container> */}

          <div style={{ flex: 1 }}>
            <ActionBar />
            <GlobalContext.Provider>
              <Form>{map(json, (sub) => renderComponent(sub))}</Form>
            </GlobalContext.Provider>
          </div>
          <RightSide />
        </div>
      </DragDropContext>
    </>
  );
};

export default connect(({ form }) => {
  return {
    components: form.components,
    items: form.items,
  };
})(DynamicFormConfig);
