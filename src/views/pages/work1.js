import React, { useState, useEffect } from "react";

import styled from "styled-components";

import Workspace from "../components/workspace";
import "./doc.scss";

const Work1Div = styled.div`
  z-index: 1;
  margin-left: 2vw;
  margin-right: 2vw;

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
      width: 540px;
      height: 330px;

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
          transition-duration: 600ms, 200ms;

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

function Work1() {
  const [isPlayed, setPlay] = useState(false);

  const playGif = function () {
    setPlay(true);
    setTimeout(() => {
      setPlay(false);
    }, 6100);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Work1Div isPlayed={isPlayed}>
      <section className="doc">
        <div className="page-title">
          <span>課題１</span>
          <span>３ｂｉｔ入力の７セグメントディスプレイ</span>
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
                本課題では, ３ｂｉｔの２進数を入力として,
                ７セグメントディスプレイ上に, ０〜７を表示する回路を構成する.{" "}
                <br />
                なお, 各数値は以下の図のように表示させること.
              </div>
              <div className="img-container">
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}/work/each_num_segments.png`}
                    alt="０〜７の数字"
                    className="segment-img"
                  ></img>
                </div>
              </div>
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
                  入力する３ｂｉｔの２進数と, 各セグメントにおける
                  <span className="hl2">真理値表を作成</span>する <br />
                  (例: 入力が１００<span className="small">(２)</span>の場合,
                  ７セグメントディスプレイの２, ３, ６, ７入力目に１を入力する)
                </li>
                <li>
                  先に作成した真理値表をもとに, 各セグメントについての
                  <span className="hl2">カルノー図</span>を作成し, 簡略化した
                  <span className="hl2">論理式を導出</span>する
                </li>
                <li>
                  導出した論理式をもとに<span className="hl2">回路を構成</span>
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
                  <span className="hl1">トグルスイッチ</span>
                  を切り替え入力を変えることで,
                  それに対応した数値がディスプレイ上に表示されていること
                </li>
                <li>
                  入出力のデバイスとその関係については,
                  以下に示すＧＩＦアニメーションを参照すること
                </li>
                <div className="gif-container">
                  <div>
                    <img
                      className="gif"
                      src={
                        isPlayed
                          ? `${process.env.PUBLIC_URL}/work/in_out/01/animate.gif`
                          : `${process.env.PUBLIC_URL}/work/in_out/01/init.jpg`
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
                  最初にワークスペース上に設置されているデバイスを基本として,
                  スイッチとディスプレイ間の回路を考えること
                </li>
                <li>
                  回路構成をわかりやすくするために, 論理式の簡略化や,
                  デバイスの配置を工夫すること
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Workspace
        loadCircuitIdx={2}
        saveFileName="t00b000x_work1.cjb"
      ></Workspace>
    </Work1Div>
  );
}

export default Work1;
