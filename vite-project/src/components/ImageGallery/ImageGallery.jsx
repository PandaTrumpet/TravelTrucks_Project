import { useEffect } from 'react'
import css from './ImageGallery.module.css'
import { fetchCarId } from "../../Redux/cars/operation.js";
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { oneCarSelector } from "../../redux/cars/selectors.js";
export default function ImageGallery() {
    const { id } = useParams()    
    const dispatch = useDispatch()
    const car = useSelector(oneCarSelector)
    const photos =car?.gallery||[]
    useEffect(()=>{dispatch(fetchCarId(id))},[dispatch,id])
    return  <ul className={css.fotoList}>
        {photos &&
          photos.map((photo, index) => {
            return (
              <li key={index}>
                <div
                  className={css.carFoto}
                  style={{ backgroundImage: `url(${photo.original})` }}
                ></div>
              </li>
            );
          })}
      </ul>
};


// import { useState, useEffect } from 'react';
// import css from './ImageGallery.module.css';
// import { fetchCarId } from "../../Redux/cars/operation.js";
// import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { oneCarSelector } from "../../redux/cars/selectors.js";
// import Modal from "react-modal";

// const customStyles = {
//   overlay: {
//     position: "fixed",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: "rgba(60, 60, 60, 0.75)",
//   },
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//     padding: 0,
//     border: "none",
//     width: "900px",
//   },
// };

// export default function ImageGallery() {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const car = useSelector(oneCarSelector);
//   const photos = car?.gallery || [];

//   const [isOpen, setIsOpen] = useState(false); // Состояние для открытия/закрытия модального окна
//   const [selectedImage, setSelectedImage] = useState(null); // Состояние для выбранного изображения

//   useEffect(() => {
//     dispatch(fetchCarId(id));
//   }, [dispatch, id]);

//   // Функция для открытия модального окна с выбранным изображением
// //   const openModal = (photo) => {
// //     setSelectedImage(photo);
// //     setIsOpen(true);
// //   };

//   // Функция для закрытия модального окна
// //   const closeModal = () => {
// //     setIsOpen(false);
// //     setSelectedImage(null);
// //   };

//   return (
//     <div>
//       {/* Галерея фотографий */}
//       <ul className={css.fotoList}>
//         {photos.map((photo, index) => (
//           <li key={index}>
//             <div
//               className={css.carFoto}
//               style={{ backgroundImage: `url(${photo.original})` }}
//             //   onClick={() => openModal(photo)} // Открытие модального окна при клике на фото
//             ></div>
//           </li>
//         ))}
//       </ul>

//       {/* Модальное окно для отображения выбранного изображения */}
//       {/* <Modal
//         isOpen={isOpen}
//         onRequestClose={closeModal}
//         style={customStyles}
//         contentLabel="Image Modal"
//         ariaHideApp={false}
//       >
//         <button onClick={closeModal} className={css.closeButton}>Закрыть</button>
//         {selectedImage && (
//           <div className={css.imageContainer}>
//             <img
//               src={selectedImage.original} // Отображение выбранного изображения
//               alt="Selected"
//               className={css.fullImage}
//             />
//           </div>
//         )}
//       </Modal> */}
//     </div>
//   );
// }

