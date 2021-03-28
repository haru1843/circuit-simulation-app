import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const TopDiv = styled.div`
  z-index: 1;

  section {
    /* min-height: 50vh; */
    &:nth-of-type(2n + 1) {
      color: rgb(30, 30, 30);

      /* background-color: rgb(200, 200, 200); */
    }
    &:nth-of-type(2n) {
      color: rgb(250, 250, 250);
      background-color: rgb(80, 80, 80);
    }

    padding-top: 2rem;
  }

  section.desc {
    text-align: center;

    div.desc-title {
      font-size: 1.5em;
      font-weight: 700;
    }

    div.desc-content {
      margin-top: 1rem;
      padding-bottom: 2.5rem;
    }
  }

  section.link {
    text-align: center;

    div.link-title {
      font-size: 1.6em;
      font-weight: 700;
    }

    div.link-grid-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      margin: 1rem 5% 2.5rem;

      a {
        border-radius: 4px;
        border: 2px solid rgb(65, 65, 65);
        background: linear-gradient(
            to bottom,
            rgb(65, 65, 65) 50%,
            rgb(250, 250, 250) 50%
          )
          bottom;
        background-size: 100% 200%;
        transition: 0.2s ease-out;

        margin: 10px 10px;

        color: rgb(30, 30, 30);
        font-size: 1.1rem;
        padding: 0.5em 0;

        text-decoration: none;

        &:hover {
          color: rgb(255, 255, 255);
          font-weight: 700;
          background-position: top;
        }
      }
    }
  }

  section.intro {
    text-align: center;

    div.intro-title {
      font-size: 1.5em;
      font-weight: 700;
    }

    div.intro-content-container {
      width: 100%;
      min-height: 350px;

      position: relative;

      div.intro-content {
        position: absolute;
        top: 47%;
        left: 50%;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);

        div {
          border-bottom: 1px solid rgb(230, 230, 230);
          width: 200px;
          margin: 1.3em 1em;
          font-size: 1.2em;
          transition: 0.2s ease-out;
          box-shadow: 0px 0px 0px rgba(200, 200, 200, 0);

          pointer-events: none;

          &:hover {
            border-bottom: 1px solid rgb(250, 250, 250);
            box-shadow: 0px 2px 0px rgba(130, 150, 190, 0.6);
          }

          a {
            display: inline-block;
            width: 100%;
            text-decoration: none;
            color: rgb(230, 230, 230);
            transition: 0.2s ease-out;
            text-shadow: 0px 0px 0px rgba(200, 200, 200, 0.6);

            pointer-events: auto;

            &:hover {
              color: rgb(255, 255, 255);
              text-shadow: 2px 2px 2px rgba(200, 200, 200, 0.6);
            }
          }
        }
      }
    }
  }

  div.next {
    width: 100%;
    height: 80vh;

    text-align: center;

    & > div {
      font-size: 3rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
    }
  }
`;

function Top() {
  return (
    <TopDiv>
      <section className="next"></section>
      <section className="desc">
        <div className="desc-title">進め方について</div>
        <div className="desc-content">
          <span>
            上部ナビゲーションバーから, 各項目へ移動し取り組む
            <br />
          </span>
          <span>
            各項目については以下の通り
            <br />
          </span>
          <ul>
            <li>使い方</li>
            <li>練習</li>
            <li>課題１</li>
            <li>課題２</li>
          </ul>
          <span>
            上記のうち, 「課題１」と「課題２」の構成ファイルを提出する
          </span>
        </div>
      </section>
      <section className="link">
        <div className="link-title">参考リンク</div>
        <div className="link-grid-container">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/"
          >
            発表資料
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/"
          >
            よくある質問
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://nu-nishimori-lab.netlify.app/"
          >
            研究室ホームページ
          </a>
        </div>
      </section>
      <section className="intro">
        <div className="intro-title">早速取り組む</div>
        <div className="intro-content-container">
          <div className="intro-content">
            <div>
              {/* <img></img> */}
              <Link to="/circuit-simulation-app/usage">使い方</Link>
            </div>
            <div>
              {/* <img></img> */}
              <Link to="/circuit-simulation-app/exercise">練習</Link>
            </div>
            <div>
              {/* <img></img> */}
              <Link to="/circuit-simulation-app/work1">課題1</Link>
            </div>
            <div>
              {/* <img></img> */}
              <Link to="/circuit-simulation-app/work2">課題2</Link>
            </div>
          </div>
        </div>
      </section>
    </TopDiv>
  );
}

export default Top;
