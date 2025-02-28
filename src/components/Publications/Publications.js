import React from 'react';
import './Publications.css';

const Publications = () => {
  const publications = [
    {
      id: 1,
      authors: '中野 珠悠・梁 震・笹尾 洋介',
      year: '2024',
      title: '英語検定教科書コーパスに基づく高頻度コロケーションの分析',
      journal: '全国英語教育学会 JASELE 第49回福岡研究大会',
      volume: '',
      pages: '',
      doi: ''
    },
    {
      id: 2,
      authors: '梁 震・笹尾 洋介',
      year: '2024',
      title: '汎用言語モデルは日本語学習者データに基づく語彙難易度を予測できるのか',
      journal: '言語処理学会2024',
      volume: '',
      pages: '',
      doi: ''
    },
    {
      id: 3,
      authors: '彭 悦, 梁 震, 笹尾 洋介',
      year: '2023',
      title: '日中バイリンガルの音声版日本語語彙サイズテストの開発と検証',
      journal: '日本語教育',
      volume: '185',
      pages: '93–108',
      doi: 'https://www.nkg.or.jp/gakkaishi/yomu/2023_08_25.html'
    },
    {
      id: 4,
      authors: 'Vincent, N. H., Liang, Z., & Sasao, Y.',
      year: '2023',
      title: 'Motion and memory in VR: The influence of VR control method on memorization of foreign language orthography',
      journal: 'International Journal on Cybernetics & Informatics (IJCI)',
      volume: '12(1)',
      pages: '151–164',
      doi: 'https://ijcionline.com/paper/12/12123ijci12.pdf'
    },
    {
      id: 5,
      authors: '彭 悦, 梁 震, 笹尾 洋介',
      year: '2022',
      title: '日本語学習における映像作品の字幕利用ー言語選択の視点からー',
      journal: '言語文化教育研究',
      volume: '20',
      pages: '335–356',
      doi: 'https://doi.org/10.14960/gbkkg.20.335'
    },
    {
      id: 6,
      authors: '彭 悦・梁 震・笹尾 洋介',
      year: '2022',
      title: '日中バイリンガルの音声版日本語語彙サイズテストの開発と検証',
      journal: '日本語教育学会秋季大会予稿集',
      volume: '',
      pages: '',
      doi: ''
    },
    {
      id: 7,
      authors: '梁 震・笹尾 洋介',
      year: '2022',
      title: '日本語語彙問題の選択肢自動生成プログラムの開発と検証',
      journal: '日本語教育学会春季大会予稿集',
      volume: '',
      pages: '',
      doi: ''
    }
  ];

  return (
    <section id="publications" className="publications-section">
      <div className="container">
        <h2>論文一覧</h2>
        <div className="publications-list">
          {publications.map((pub) => (
            <div key={pub.id} className="publication-item">
              <div className="publication-year">{pub.year}</div>
              <div className="publication-content">
                <h3>{pub.title}</h3>
                <p className="publication-authors">{pub.authors}</p>
                <p className="publication-journal">
                  <em>{pub.journal}</em>
                  {pub.volume && <span>, {pub.volume}</span>}
                  {pub.pages && <span>, {pub.pages}</span>}
                </p>
                {pub.doi && (
                  <a href={pub.doi} target="_blank" rel="noopener noreferrer" className="publication-link">
                    論文リンク
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;