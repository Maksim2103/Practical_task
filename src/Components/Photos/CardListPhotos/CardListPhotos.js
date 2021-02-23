import { useState, useMemo } from 'react';
import './photos.css';

import CardItemPhotos from '../CardItemPhotos/CardItemPhotos';
import ButtonFooter from '../../ButtonFooter/ButtonFooter';
import HeaderItemPhoto from '../HeaderItemPhoto/HeaderItemPhoto';

const CardListPhotos = ({ data, deleteItem, addItem, editItem }) => {
  const [paramPage, setParamPage] = useState(3);
  const [isStatusCard, setIsStatusCard] = useState(false);

  const sliceData = data.slice(0, paramPage);

  const isVisibleBtn = useMemo(() => data.length > sliceData.length, [
    data,
    sliceData,
  ]);

  const handleShowMe = () => {
    setParamPage(paramPage + 3);
  };

  const toggleViewMode = () => {
    setIsStatusCard(!isStatusCard);
  };

  const buttonsProps = {
    edit: { title: 'Edit', header: 'Edit photo', variant: 'outline-dark' },
    add: { title: 'Add photo', header: 'Add photo', variant: 'primary' },
    modalButtonEdit: { title: 'Edit' },
    modalButtonAdd: { title: 'Create' },
  };

  return (
    <div>
      <div className="container-fluid  w-75">
        <HeaderItemPhoto
          addItem={addItem}
          buttonTitle={buttonsProps.add.title}
          buttonVariant={buttonsProps.add.variant}
          headertitle={buttonsProps.add.header}
          modalButtonTitle={buttonsProps.modalButtonAdd.title}
          isStatusCard={isStatusCard}
          toggleViewMode={toggleViewMode}
        />
      </div>
      <div className="container-fluid d-flex flex-wrap justify-content-around w-75">
        {sliceData.map((el) => (
          <div
            key={el.id}
            className={!isStatusCard ? 'box-body p-2 ' : 'box-body w-50 p-2'}
          >
            <CardItemPhotos
              itemTitle={el.title}
              itemUrl={el.url}
              id={el.id}
              deleteItem={deleteItem}
              editItem={editItem}
              buttonTitle={buttonsProps.edit.title}
              buttonVariant={buttonsProps.edit.variant}
              headertitle={buttonsProps.edit.header}
              modalButtonTitle={buttonsProps.modalButtonEdit.title}
            />
          </div>
        ))}
      </div>

      {isVisibleBtn && <ButtonFooter handleShowMe={handleShowMe} />}
    </div>
  );
};

export default CardListPhotos;
