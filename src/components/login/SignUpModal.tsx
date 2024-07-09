import styles from './SignUpModal.module.scss';

import GreenTransparentLogo from '../../assets/logo/green-transparent.svg';
import UserDefaultImage from '../../assets/user-default-image.svg';
import ProfileEditPen from '../../assets/profile-edit-pen.svg';
import InfoGrayCircle from '../../assets/info-gray-circle.svg';

const SignUpModal = () => {
  return (
    <div className={styles.container}>
      <div className={styles.welcomeContainer}>
        <img
          src={GreenTransparentLogo}
          alt="투명 배경의 초록색 MAPU 로고"
          className={styles.logo}
        />
        <div className={styles.welcome__textContainer}>
          <h3>프로필 만들기</h3>
          <h4>나만의 닉네임과 아이디를 만들어보세요</h4>
        </div>
      </div>

      <div className={styles.signUpContainer}>
        <div className={styles.userImgContainer}>
          <div className={styles.userImg}>
            <img src={UserDefaultImage} alt="사용자 기본 프로필 이미지" />
            <button type="button" className={styles.profileEditBtn}>
              <img src={ProfileEditPen} alt="프로필 이미지 편집 버튼" />
            </button>
          </div>
        </div>
        <div className={styles.userDataContainer}>
          <div className={styles.userDataInputContainer}>
            <div className={styles.inputContainer}>
              <input type="text" placeholder="닉네임을 입력하세요." />
              <div className={styles.valueInfoContainer}>
                <div className={styles.valueInfo}>
                  <img src={InfoGrayCircle} alt="회색 안내 아이콘" />
                  <span>3~12글자 이내</span>
                </div>
              </div>
            </div>
            <div className={styles.inputContainer}>
              <input type="text" placeholder="아이디를 입력하세요." />
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
          <button type="submit" className={styles.signUpBtn}>
            <span>적용하기</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
