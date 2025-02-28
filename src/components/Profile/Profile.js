import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <section id="profile" className="profile-section">
      <div className="container">
        <h2>プロフィール</h2>
        <div className="profile-content">
          <div className="profile-details">
            <ul>
              <li><strong>名前:</strong> 梁 震</li>
              <li><strong>生年月日:</strong> 1997年8月30日</li>
              <li><strong>出身地:</strong> 北京</li>
              <li><strong>現住所:</strong> 日本（横浜在住経験あり、現在は京都大学博士課程在籍）</li>
            </ul>
          </div>
          <div className="profile-summary">
            <p>
              私は北京出身の日中バイリンガルで、京都大学大学院にて外国語教育と機械学習を融合した研究をしています。
              2023年10月に株式会社EastLinkerを起業し、国立国語研究所のプロファイラー開発などを受託しました。
              SwiftやNode.jsを活用した英語学習アプリ「LANDS」開発やReactによるWeb開発、Word2Vecによる多肢選択式語彙問題の自動生成、
              LLMによる語彙難易度測定など、学術と実務を両立したプロジェクトを多数経験しています。
            </p>
            <p>
              LLMモデルのfine-tuning、GensimやScikit-learn、Transformersを活用した機械学習・自然言語処理分野の研究実績があり、
              大規模言語モデル（LLM）の教育応用を探究しています。学会での発表実績も多く、多言語環境での教育システム構築についてのノウハウを蓄積しています。
              また、チーム開発の経験も豊富で、要件定義から実装・テストまでの一貫体制で成功させたプロジェクトも数多くあります。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;