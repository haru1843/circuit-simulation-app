import React, { useState } from "react";

import styled from "styled-components";

import Workspace from "../components/workspace";
import "./doc.scss";

const Work2Div = styled.div`
  z-index: 1;
  li {
    margin-bottom: 0.7em !important;
  }

  div.img-container {
    text-align: center;
    margin-bottom: 1rem;

    & > div {
      position: relative;

      display: inline-block;
      border: 2px solid rgb(60, 60, 60);
      border-radius: 20px;
      width: 360px;
      height: 240px;

      img.segment-img {
        display: inline-block;
        height: 90%;
        width: 90%;

        position: absolute;

        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);

        margin-top: 0 !important;
      }
    }
  }

  div.gif-container {
    text-align: center;
    margin-bottom: 1rem;

    & > div {
      position: relative;

      display: inline-block;
      border: 2px solid rgb(60, 60, 60);
      border-radius: 20px;
      width: 560px;
      height: 220px;

      img {
        display: inline-block;

        &.gif {
          height: 98%;
          width: 98%;

          opacity: ${(props) => (props.isPlayed ? 1 : 0.2)};
          transition: opacity 600ms;
        }

        &.icon {
          height: 60%;
          cursor: ${(props) => (props.isPlayed ? "default" : "pointer")};

          opacity: ${(props) => (props.isPlayed ? 0 : 1)};

          transition-property: opacity, height;
          transition-duration: 400ms, 200ms;

          &:hover {
            height: 40%;
          }
        }

        position: absolute;

        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);

        margin-top: 0 !important;
      }
    }
  }
`;

function Work2() {
  const [isPlayed, setPlay] = useState(false);

  const playGif = function () {
    setPlay(true);
    setTimeout(() => {
      setPlay(false);
    }, 10100);
  };
  return (
    <Work2Div isPlayed={isPlayed}>
      <section className="doc">
        <div className="page-title">
          <span>課題２</span>
          <span>１６進カウンタ</span>
        </div>
        <div className="page-desc">
          {/* 課題概要 */}
          <div className="container">
            <div className="desc-title">
              <img
                src={`${process.env.PUBLIC_URL}/work/goal.svg`}
                alt="フローの図"
              ></img>
              課題の概要
            </div>
            <div className="desc-cont">
              <div>
                本課題では,
                ＪＫフリップフロップを用いた１６進カウンタを構成する.
                １６進カウンタとは, クロックパルスを入力することで,
                ４ビットの数値が１ずつ増えていき, １１１１
                <span className="small">(2)</span>の時に, ００００
                <span className="small">(2)</span>
                に戻るということを繰り返すような順序回路のことである.
              </div>
              <ol></ol>
            </div>
          </div>

          {/* 回路構成の流れ */}
          <div className="container">
            <div className="desc-title">
              <img
                src={`${process.env.PUBLIC_URL}/work/process.svg`}
                alt="フローの図"
              ></img>
              回路構成の流れ
            </div>
            <div className="desc-cont">
              <ol>
                <li>
                  ４ビット１６進カウンタの
                  <span className="hl2">状態遷移表</span>を作成する
                </li>
                <li>
                  状態遷移表をもとに,
                  <span className="hl2">Ｊ, Ｋについての論理式</span>
                  を導出する (<span className="hl1">カルノー図</span>等を用いる)
                </li>
                <li>
                  導出した論理式をもとに
                  <span className="hl2">
                    ＪＫフリップフロップを用いた回路を構成
                  </span>
                  する
                </li>
              </ol>
            </div>
          </div>

          {/* 確認事項 */}
          <div className="container">
            <div className="desc-title">
              <img
                src={`${process.env.PUBLIC_URL}/work/clipboard.svg`}
                alt="確認事項の画像"
              ></img>
              確認事項
            </div>
            <div className="desc-cont">
              <ul>
                <li>
                  プッシュオンスイッチを押すごとに, ディスプレイ上の数値が進む
                </li>
                <li>
                  ディスプレイ上の数値がＦの時にプッシュオンスイッチを押すと,
                  ０に戻る
                </li>
                <li>
                  入出力のデバイスとそれらの挙動については,
                  以下に示すGIFアニメーションを参照すること
                </li>
                <div className="gif-container">
                  <div>
                    <img
                      className="gif"
                      src={
                        isPlayed
                          ? `${process.env.PUBLIC_URL}/work/in_out/02/animate.gif`
                          : `${process.env.PUBLIC_URL}/work/in_out/02/init.jpg`
                      }
                      alt="入出力の関係"
                    ></img>
                    <img
                      className="icon"
                      src={`${process.env.PUBLIC_URL}/work/in_out/play-button.svg`}
                      alt="再生ボタン"
                      onClick={playGif}
                    ></img>
                  </div>
                </div>
              </ul>
            </div>
          </div>

          {/* 注意事項 */}
          <div className="container">
            <div className="desc-title">
              <img
                src={`${process.env.PUBLIC_URL}/work/bell.svg`}
                alt="注意事項の画像"
              ></img>
              注意事項
            </div>
            <div className="desc-cont">
              <ul>
                <li>
                  クロックスイッチによる入力のみで,
                  カウンタが進むような回路構成にすること
                </li>
                <li>
                  ＪＫフリップフロップの特性をよく考えて, 回路を構成すること
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Workspace
        loadCircuitIdx={3}
        saveFileName="t00b000x_work2.cjb"
      ></Workspace>
    </Work2Div>
  );
}

export default Work2;
