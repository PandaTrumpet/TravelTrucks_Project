// import { useEffect, useState } from 'react';
// import css from './ImageGallery.module.css';
// import { fetchCarId } from "../../Redux/cars/operation.js";
// import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { oneCarSelector } from "../../redux/cars/selectors.js";
// import Modal from 'react-modal';

// export default function ImageGallery() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null); // Для хранения выбранного изображения
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const car = useSelector(oneCarSelector);
//   const photos = car?.gallery || [];

//   useEffect(() => {
//     dispatch(fetchCarId(id));
//   }, [dispatch, id]);

//   const openModal = (photo) => {
//     setSelectedImage(photo); // Устанавливаем выбранное изображение
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//     setSelectedImage(null); // Очищаем выбранное изображение при закрытии
//   };

//   const customStyles = {
//     overlay: {
//       position: "fixed",
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       backgroundColor: "rgba(60, 60, 60, 0.75)",
//     },
//     content: {
//       top: "50%",
//       left: "50%",
//       right: "auto",
//       bottom: "auto",
//       marginRight: "-50%",
//       transform: "translate(-50%, -50%)",
//       padding: 0,
//       border: "none",
//       width: "900px",
//     },
//   };

//   return (
//     <div>
//       <ul className={css.fotoList}>
//         {photos &&
//           photos.map((photo, index) => (
//             <li key={index}>
//               <div
//                 onClick={() => openModal(photo)} // Передаем изображение в функцию открытия модального окна
//                 className={css.carFoto}
//                 style={{ backgroundImage: `url(${photo.original})` }}
//               />
//             </li>
//           ))}
//       </ul>

//       {/* Модальное окно для отображения выбранного изображения */}
//       <Modal
//         isOpen={isOpen}
//         onRequestClose={closeModal}
//         style={customStyles}
//         ariaHideApp={false}
//         contentLabel="Image Modal"
//       >

//         {selectedImage && ( // Если изображение выбрано, рендерим его
//           <div>
//             <img src={selectedImage.original} onClick={closeModal} alt="Selected" style={{ width: '100%',height:'100%' }} />
//           </div>
//         )}
//       </Modal>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import css from "./ImageGallery.module.css";
import { fetchCarId } from "../../Redux/cars/operation.js";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { oneCarSelector } from "../../redux/cars/selectors.js";
import Modal from "react-modal";

export default function ImageGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // Для хранения выбранного изображения
  const { id } = useParams();
  const dispatch = useDispatch();
  const car = useSelector(oneCarSelector);
  const photos = car?.gallery || [];

  useEffect(() => {
    dispatch(fetchCarId(id));
  }, [dispatch, id]);

  const openModal = (photo) => {
    setSelectedImage(photo); // Устанавливаем выбранное изображение
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null); // Очищаем выбранное изображение при закрытии
  };

  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(60, 60, 60, 0.75)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "20px",
      padding: 0,
      border: "none",
      maxWidth: "90vw",
      maxHeight: "90vh", // Ограничение максимальной высоты
    },
  };

  return (
    <div>
      <ul className={css.fotoList}>
        {photos &&
          photos.map((photo, index) => (
            <li key={index}>
              <div
                onClick={() => openModal(photo)} // Передаем изображение в функцию открытия модального окна
                className={css.carFoto}
                style={{ backgroundImage: `url(${photo.original})` }}
              />
            </li>
          ))}
      </ul>

      {/* Модальное окно для отображения выбранного изображения */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Image Modal"
      >
        {selectedImage && ( // Если изображение выбрано, рендерим его
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <img
              src={selectedImage.original}
              onClick={closeModal}
              alt="Selected"
              style={{
                maxWidth: "100%",
                maxHeight: "90vh", // Ограничение по высоте
                objectFit: "contain", // Адаптирует изображение под размер контейнера
              }}
            />
          </div>
        )}
      </Modal>
    </div>
  );
}
