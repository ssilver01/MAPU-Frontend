import { useState } from 'react';
import styles from './ProfileInfoSetting.module.scss';
import { RegisterStatus } from '../../types/RegisterStatus';
import useRegisterStore from '../../stores/registerStore';

import UserDefaultImage from '../../assets/user-default-image.svg';
import ProfileEditPen from '../../assets/profile-edit-pen.svg';
import InfoGrayCircle from '../../assets/info-gray-circle.svg';

const ProfileInfo = () => {
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const { registerStatus, setLogIn } = useRegisterStore();

  const handleSignUp = () => {
    //TODO: 회원가입 api 연결
    setLogIn('true access', 'true refresh'); //아마 얘가 회원가입 api 연결 코드 내부로 이동
  };

  return (
    <div className={styles.profileInfoContainer}>
      <div className={styles.userImgContainer}>
        <div className={styles.userImg}>
          <img src={UserDefaultImage} alt="사용자 기본 프로필 이미지" />
          <input
            type="file"
            id="user-profile-img"
            className={styles.profileEditInput}
          />
          <label htmlFor="user-profile-img" className={styles.profileEditBtn}>
            <img src={ProfileEditPen} alt="프로필 이미지 편집 버튼" />
          </label>
        </div>
      </div>
      <div className={styles.userDataContainer}>
        <div className={styles.userDataInputContainer}>
          <div className={styles.inputContainer}>
            <input type="text" placeholder="닉네임을 입력하세요." required />
            <div className={styles.valueInfoContainer}>
              <div className={styles.valueInfo}>
                <img src={InfoGrayCircle} alt="회색 안내 아이콘" />
                <span>3~12글자 이내</span>
              </div>
            </div>
          </div>
          <div className={styles.inputContainer}>
            <input type="text" placeholder="아이디를 입력하세요." required />
            <div className={styles.valueInfoContainer}>
              <div className={styles.valueInfo}>
                <img src={InfoGrayCircle} alt="회색 안내 아이콘" />
                <span>3~20글자 이내</span>
              </div>
              <div className={styles.valueInfo}>
                <img src={InfoGrayCircle} alt="회색 안내 아이콘" />
                <span>한글 미사용</span>
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className={styles.submitBtn}
          disabled={!isComplete}
          onClick={handleSignUp}
        >
          {registerStatus === RegisterStatus.SIGNING_UP ? (
            <span>시작하기</span>
          ) : (
            <span>적용하기</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
