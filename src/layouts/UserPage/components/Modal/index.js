import { useState } from "react";
import { Button } from "../../../../ui/Button";
import { Modal } from "../../../../ui/Modal";
import { albumsList, fetchAlbums} from "../../../../slice/endpointSlice";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";

export const ModalComponent = ({userId}) => {
    const dispatch = useDispatch();
    const data = useSelector(albumsList);
    // useEffect(() => {
      
    // }, [dispatch, userId]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        console.log(userId,'userId');
        dispatch(fetchAlbums(`albums?userId=${userId}`));
        setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    return (
        <>
          <Button  onClick={showModal}>Albums</Button>
          <Modal title="Modal Title" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            {data?.map(album => 
            <>
                <p>{album?.title}</p>
                <p>{album?.id}</p>
                <p>{album?.userId}</p>
            </>
            )}
          </Modal>
        </>
        
      );
  };