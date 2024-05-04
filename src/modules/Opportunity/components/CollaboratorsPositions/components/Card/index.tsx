import { ICollaboratorPosition } from 'types';
import image from 'assets/not_image.jpg';
import styles from './styles.module.scss';

type Props = {
  data: ICollaboratorPosition;
};

const Card = ({ data }: Props) => {
  const { fullname, position_name, photo, desc } = data;
  return (
    <div className={styles['card-position']}>
      <div className={styles['card-position__photo']}>
        <img
          src={photo}
          alt='Фото'
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = image;
          }}
        />
      </div>
      <div className={styles['card-position__wrapper']}>
        <div className={styles['card-position__title']}>{fullname}</div>
        <div className={styles['card-position__content']}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='800px'
            height='800px'
            viewBox='0 0 24 24'
            fill='none'
          >
            <g clipPath='url(#clip0_1076_36063)'>
              <path
                d='M12.4393 7.43933L8.49996 11.3787L2.76773 5.64644C2.3772 5.25592 1.74404 5.25592 1.35352 5.64644L0.646409 6.35355C0.255885 6.74407 0.255885 7.37724 0.646409 7.76776L7.4393 14.5607C8.02509 15.1464 8.97484 15.1464 9.56062 14.5607L13.5 10.6213L18.2322 15.3535L16.2928 17.2929C16.0068 17.5789 15.9212 18.009 16.076 18.3827C16.2308 18.7564 16.5954 19 16.9999 19H22.9999C23.5522 19 23.9999 18.5523 23.9999 18V12C23.9999 11.5955 23.7562 11.2309 23.3826 11.0761C23.0089 10.9213 22.5788 11.0069 22.2928 11.2929L20.3535 13.2322L14.5606 7.43933C13.9748 6.85355 13.0251 6.85355 12.4393 7.43933Z'
                fill='#ffffff'
              />
            </g>
            <defs>
              <clipPath id='clip0_1076_36063'>
                <rect width='24' height='24' fill='white' />
              </clipPath>
            </defs>
          </svg>
          <div className={styles['card-position__text']}>{position_name}</div>
        </div>
        <div className={styles['card-position__desc']}>{desc}</div>
      </div>
    </div>
  );
};

export default Card;
