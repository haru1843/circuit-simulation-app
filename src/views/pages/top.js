import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import OuterLinkSvg from "../components/outerLinkSvg";

const TopDiv = styled.div`
  z-index: 1;

  section {
    &:nth-of-type(2n + 1) {
      color: rgb(30, 30, 30);
    }
    &:nth-of-type(2n) {
      color: rgb(50, 50, 50);
      background-color: rgb(230, 230, 230);
    }

    padding-top: 2rem;
  }

  section.desc {
    text-align: center;
    position: relative;

    min-height: 400px;

    span {
      &.hl1 {
        font-weight: 700;
        color: rgb(199, 143, 90);
        padding: 0.1em 0.2em 0 !important;
      }
      &.hl2 {
        font-weight: 700;
        color: rgb(90, 115, 161);
        padding: 0.1em 0.2em 0 !important;
      }
    }

    div.desc-title {
      font-size: 1.5em;
      font-weight: 700;
    }

    div.desc-content {
      text-align: left;

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);

      white-space: nowrap;
    }

    ol {
      list-style: none;
      counter-reset: ol-counter;

      li {
        margin-bottom: 0.3em;
        &:before {
          display: inline-block;
          counter-increment: ol-counter;
          content: counter(ol-counter);

          background-color: rgb(199, 143, 90);
          color: white;

          font-size: 1.2em;
          font-weight: 700;
          text-align: center;
          line-height: 1.2em;
          width: 1.2em;
          height: 1.2em;

          margin-right: 0.5em;

          border-radius: 50%;
        }
      }
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
      margin: 2rem 5% 0rem;
      padding-bottom: 4rem;

      a {
        border-radius: 4px;
        border: 2px solid rgb(65, 65, 65);
        background: linear-gradient(
            to bottom,
            rgb(65, 65, 65) 50%,
            rgb(240, 240, 240) 50%
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

        &.presentation:hover ~ div.link-desc {
          div.for-presentation {
            opacity: 1;
          }
        }

        &.faq:hover ~ div.link-desc {
          div.for-faq {
            opacity: 1;
          }
        }

        &.hp:hover ~ div.link-desc {
          div.for-hp {
            opacity: 1;
          }
        }

        position: relative;
        svg {
          height: 0.7em;
          fill: rgb(60, 60, 60);

          position: absolute;
          top: 50%;
          transform: translateY(-50%) translateX(30%);

          transition: 0.2s ease-out;
        }

        &:hover svg {
          fill: rgb(240, 240, 240);
        }
      }

      div.link-desc {
        grid-row: 2;
        grid-column: 1 / 4;

        margin: 2rem 2rem 0;

        border-bottom: 1px solid rgb(95, 95, 95);

        height: 2.5em;
        position: relative;

        div {
          display: inline-block;
          opacity: 0;

          img.icon {
            height: 2em;

            margin-left: calc(0.5em);

            position: absolute;
            top: 0;
            left: 0;
          }

          span {
            display: inline-block;
            height: 2em;
            line-height: 2em;

            margin-left: calc(2em + 1.5em);

            position: absolute;
            top: 0;
            left: 0;
          }
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
          border-bottom: 1px solid rgb(80, 80, 80);
          width: 160px;
          margin: 1.3em 1em;
          font-size: 1.2em;
          transition: 0.2s ease-out;
          box-shadow: 0px 0px 0px rgba(200, 200, 200, 0);

          pointer-events: none;

          &:hover {
            border-bottom: 1px solid rgb(50, 50, 50);
            box-shadow: 0px 2px 0px rgba(199, 143, 90, 0.6);
          }

          a {
            display: inline-block;
            width: 100%;
            text-decoration: none;
            color: rgb(30, 30, 30);
            transition: 0.2s ease-out;
            text-shadow: 0px 0px 0px rgba(200, 200, 200, 0.6);

            pointer-events: auto;

            &:hover {
              color: rgb(10, 10, 10);
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <TopDiv>
      <section className="desc">
        <div className="desc-title">?????????????????????</div>
        <div className="desc-content">
          <div>?????????????????????????????????????????????????????????</div>
          <ol>
            <li>???????????????????????????????????????, ?????????????????????????????????</li>
            <li>?????????????????????, ?????????????????????</li>
            <li>??????????????????, ????????????????????????</li>
            <li>
              ????????????????????????????????????????????????????????????, ?????????????????????????????????
            </li>
          </ol>
          <div>
            ??????, ??????<span className="hl1">????????????</span>???
            <span className="hl1">????????????</span>,{" "}
            <span className="hl1">??????????????????</span>????????????????????????????????????.
          </div>
        </div>
      </section>
      <section className="link">
        <div className="link-title">???????????????</div>
        <div className="link-grid-container">
          <a
            className="presentation"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.dropbox.com/scl/fi/ztm3jufc9hf15lcxp9xr5/_.pptx?dl=0&rlkey=lwk391t394oeabnv46ucty2fv"
          >
            ????????????
            <OuterLinkSvg></OuterLinkSvg>
          </a>
          <a
            className="faq"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.notion.so/7f5658db1d1544dca7c04bd93cb10b52"
          >
            ??????????????????
            <OuterLinkSvg></OuterLinkSvg>
          </a>
          <a
            className="hp"
            target="_blank"
            rel="noopener noreferrer"
            href="https://nu-nishimori-lab.netlify.app/"
          >
            ???????????????????????????
            <OuterLinkSvg></OuterLinkSvg>
          </a>
          <div className="link-desc">
            <div className="for-presentation">
              <img
                className="icon"
                src={`${process.env.PUBLIC_URL}/footer/presentation.svg`}
                alt="?????????????????????"
              ></img>
              <span>?????????????????????????????????????????????????????????????????????</span>
            </div>
            <div className="for-faq">
              <img
                className="icon"
                src={`${process.env.PUBLIC_URL}/footer/request.svg`}
                alt="???????????????"
              ></img>
              <span>????????????????????????????????????????????????????????????????????????</span>
            </div>
            <div className="for-hp">
              <img
                className="icon"
                src={`${process.env.PUBLIC_URL}/footer/homepage.svg`}
                alt="???????????????????????????"
              ></img>
              <span>??????????????????????????????????????????????????????????????????????????????</span>
            </div>
          </div>
        </div>
      </section>
      <section className="intro">
        <div className="intro-title">??????????????????</div>
        <div className="intro-content-container">
          <div className="intro-content">
            <div>
              <Link to="/circuit-simulation-app/usage">?????????</Link>
            </div>
            <div>
              <Link to="/circuit-simulation-app/exercise">??????</Link>
            </div>
            <div>
              <Link to="/circuit-simulation-app/work1">??????1</Link>
            </div>
            <div>
              <Link to="/circuit-simulation-app/work2">??????2</Link>
            </div>
          </div>
        </div>
      </section>
    </TopDiv>
  );
}

export default Top;
