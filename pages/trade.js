import { useCallback } from "react";
import { useRouter } from "next/router";

const Trade = () => {
  const router = useRouter();

  const onValantisImageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onTRADEClick = useCallback(() => {
    router.push("/trade");
  }, [router]);

  const onPOOLSClick = useCallback(() => {
    router.push("/pools");
  }, [router]);

  const onHamburgerMenuClick = useCallback(() => {
    router.push("/trade04");
  }, [router]);

  return (
    <div className="relative bg-midnightblue-100 shadow-[-57px_49px_37px_rgba(0,_0,_0,_0.25)] w-full h-[2606px] overflow-hidden text-left text-[48px] text-white font-inter">
      <img
        className="absolute top-[265px] left-[0px] w-[16.36px] h-[1250px]"
        alt=""
        src="/vector-51.svg"
      />
      <div className="absolute top-[638px] left-[1429px] bg-gainsboro w-1 h-[206px]" />
      <img
        className="absolute top-[688px] left-[52px] w-[84px] h-[122px] overflow-hidden"
        alt=""
        src="/layer-1.svg"
      />
      <div className="absolute top-[109px] left-[0px] bg-darkorange-100 w-[53px] h-[7px]" />
      <div className="absolute top-[282px] left-[728px] tracking-[-1.2px] leading-[56px] font-semibold text-gray-100 flex items-center w-[422px]">
        <span className="[line-break:anywhere] w-full">
          <p className="m-0">Buy and Sell Crypto Instantly</p>
          <p className="m-0">on Valantis.</p>
        </span>
      </div>
      <div className="absolute w-[calc(100%_-_240px)] top-[966px] right-[120px] left-[120px] rounded-2xl bg-white box-border h-[1019px] text-[24px] text-gray-200 font-roboto border-[1px] border-solid border-midnightblue-100">
        <div className="absolute top-[-79px] left-[-120px] bg-white box-border w-[1440px] h-[1189px] border-r-[18px] border-solid border-midnightblue-100 border-l-[18px]" />
        <div className="absolute w-[calc(100%_-_50px)] top-[25px] right-[25px] left-[25px] flex flex-row items-center justify-between">
          <div className="flex flex-row items-start justify-start">
            <div className="relative leading-[28.8px] font-semibold">
              Top Traded
            </div>
          </div>
          <div className="rounded-2xl box-border h-12 flex flex-row p-1 items-start justify-start text-center text-base text-midnightblue-200 border-[1px] border-solid border-lavender-200">
            <div className="rounded-xl bg-lavender-100 flex flex-row py-2 px-3 items-center justify-center">
              <div className="flex flex-row items-center justify-start gap-[8px]">
                <div className="w-5 h-5 flex flex-row items-start justify-center max-w-[103.77999877929688px]">
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/avalanche7c81486190237e87e238c029fd746008svg.svg"
                  />
                </div>
                <div className="flex flex-row py-0 pr-[0.779998779296875px] pl-0 items-start justify-center">
                  <div className="relative leading-[24px] font-semibold">
                    Avalanche
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl flex flex-row py-2 px-3 items-center justify-center">
              <div className="flex flex-row items-center justify-start gap-[8px]">
                <div className="w-5 h-5 flex flex-row items-start justify-center max-w-[94.75px]">
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/arbitrumd7e8298d1f257d8916fc0fe30ee31f96svg.svg"
                  />
                </div>
                <div className="flex flex-row py-0 pr-[1.75px] pl-px items-start justify-center">
                  <div className="relative leading-[24px] font-semibold">
                    Arbitrum
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl flex flex-row py-2 px-3 items-center justify-center">
              <div className="flex flex-row items-center justify-start gap-[8px]">
                <div className="w-5 h-5 flex flex-row items-start justify-center max-w-[106.30999755859375px]">
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/bnbchaina6c9ad0b3331a8aa2231348aa47590a0svg.svg"
                  />
                </div>
                <div className="flex flex-row py-0 pr-[0.30999755859375px] pl-px items-start justify-center">
                  <div className="relative leading-[24px] font-semibold">
                    BNB Chain
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl flex flex-row py-2 px-3 items-center justify-center">
              <div className="flex flex-row items-center justify-start gap-[8px]">
                <div className="w-5 h-5 flex flex-row items-start justify-center max-w-[100.16000366210938px]">
                  <div className="w-5 h-5 overflow-hidden shrink-0 flex flex-row items-start justify-start">
                    <img
                      className="relative w-5 h-5 object-cover"
                      alt=""
                      src="/vector8@2x.png"
                    />
                  </div>
                </div>
                <div className="flex flex-row py-0 pr-[1.160003662109375px] pl-px items-start justify-center">
                  <div className="relative leading-[24px] font-semibold">
                    Ethereum
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_50px)] top-[97px] right-[25px] left-[25px] box-border h-px opacity-[0.6] border-b-[1px] border-solid border-lavender-200" />
        <div className="absolute w-[calc(100%_+_104px)] top-[114px] right-[-52px] left-[-52px] overflow-hidden flex flex-col items-start justify-center text-right text-xs text-lightslategray">
          <div className="relative w-[1150px] h-10">
            <div className="absolute top-[calc(50%_-_9px)] left-[24px] tracking-[0.6px] leading-[16px] uppercase text-left">
              #
            </div>
            <div className="absolute top-[calc(50%_-_9px)] left-[147.69px] tracking-[0.6px] leading-[16px] uppercase text-left">
              Token
            </div>
            <div className="absolute w-[calc(100%_-_907.89px)] top-[12px] right-[514.69px] left-[393.2px] h-4">
              <div className="absolute top-[0px] left-[calc(50%_+_13.97px)] w-4 h-4 overflow-hidden flex flex-row p-[2.6666665077209473px] box-border items-start justify-start">
                <img
                  className="relative w-[10.67px] h-[10.67px]"
                  alt=""
                  src="/vector9.svg"
                />
              </div>
              <div className="absolute top-[-1px] right-[0.09px] tracking-[0.6px] leading-[16px] uppercase">
                Volume (24H)
              </div>
            </div>
            <div className="absolute top-[11px] right-[316.77px] tracking-[0.6px] leading-[16px] uppercase">
              Price
            </div>
            <div className="absolute top-[11px] right-[24.33px] tracking-[0.6px] leading-[16px] uppercase">
              Change (24H)
            </div>
          </div>
          <div className="flex flex-col items-start justify-center text-sm text-gray-200">
            <div className="relative w-[1150px] h-14">
              <div className="absolute top-[calc(50%_-_10px)] left-[24px] leading-[20px] text-left">
                1
              </div>
              <div className="absolute w-[calc(100%_-_952.48px)] top-[16px] right-[804.79px] left-[147.69px] flex flex-row py-0 pr-[127.55000305175781px] pl-0 box-border items-center justify-start gap-[8px] text-left text-midnightblue-200">
                <img
                  className="relative rounded-9980xl w-6 h-6 object-cover max-w-[197.52000427246094px]"
                  alt=""
                  src="/logopng@2x.png"
                />
                <div className="flex flex-row py-0 pr-[0.970001220703125px] pl-0 items-start justify-start">
                  <b className="relative leading-[20px]">USDC</b>
                </div>
              </div>
              <b className="absolute top-[calc(50%_-_10px)] left-[562.55px] leading-[20px]">
                $5,805,635
              </b>
              <b className="absolute top-[calc(50%_-_10px)] left-[796px] leading-[20px]">
                $1.00
              </b>
              <b className="absolute top-[calc(50%_-_10px)] left-[1113.78px] leading-[20px] text-midnightblue-200">
                --
              </b>
            </div>
            <div className="relative w-[1150px] h-14">
              <div className="absolute top-[calc(50%_-_10px)] left-[24px] leading-[20px] text-left">
                2
              </div>
              <div className="absolute w-[calc(100%_-_952.48px)] top-[16px] right-[804.79px] left-[147.69px] flex flex-row py-0 pr-[127.55000305175781px] pl-0 box-border items-center justify-start gap-[8px] text-left text-smi text-midnightblue-200">
                <img
                  className="relative rounded-9980xl w-6 h-6 object-cover max-w-[197.52000427246094px]"
                  alt=""
                  src="/logopng1@2x.png"
                />
                <div className="flex flex-row py-0 pr-[1.970001220703125px] pl-0 items-start justify-start">
                  <b className="relative leading-[20px]">BTC.b</b>
                </div>
              </div>
              <b className="absolute top-[calc(50%_-_10px)] left-[562.55px] leading-[20px]">
                $4,292,122
              </b>
              <b className="absolute top-[calc(50%_-_10px)] left-[781.56px] leading-[20px]">
                $29,390
              </b>
              <b className="absolute top-[calc(50%_-_10px)] left-[1080.33px] leading-[20px] text-salmon">
                -0.03%
              </b>
            </div>
            <div className="relative w-[1150px] h-14">
              <div className="absolute top-[calc(50%_-_10px)] left-[24px] leading-[20px] text-left">
                3
              </div>
              <div className="absolute w-[calc(100%_-_952.48px)] top-[16px] right-[804.79px] left-[147.69px] flex flex-row py-0 pr-[131.1300048828125px] pl-0 box-border items-center justify-start gap-[8px] text-left text-smi text-midnightblue-200">
                <div className="w-6 h-6 flex flex-row items-start justify-center max-w-[197.52000427246094px]">
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/avalanche7c81486190237e87e238c029fd746008svg1.svg"
                  />
                </div>
                <div className="flex flex-row py-0 pr-[0.3899993896484375px] pl-0 items-start justify-start">
                  <b className="relative leading-[20px]">AVAX</b>
                </div>
              </div>
              <b className="absolute top-[calc(50%_-_10px)] left-[562.55px] leading-[20px]">
                $2,585,510
              </b>
              <b className="absolute top-[calc(50%_-_10px)] left-[788.72px] leading-[20px]">
                $12.42
              </b>
              <b className="absolute top-[calc(50%_-_10px)] left-[1080.33px] leading-[20px] text-salmon">
                -0.73%
              </b>
            </div>
            <div className="relative w-[1150px] h-14">
              <div className="absolute top-[calc(50%_-_10px)] left-[24px] leading-[20px] text-left">
                4
              </div>
              <div className="absolute w-[calc(100%_-_952.48px)] top-[16px] right-[804.79px] left-[147.69px] flex flex-row py-0 pr-[132.27000427246094px] pl-0 box-border items-center justify-start gap-[8px] text-left text-midnightblue-200">
                <img
                  className="relative rounded-9980xl w-6 h-6 object-cover max-w-[197.52000427246094px]"
                  alt=""
                  src="/logopng2@2x.png"
                />
                <div className="flex flex-row py-0 pr-[1.25px] pl-0 items-start justify-start">
                  <b className="relative leading-[20px]">USDt</b>
                </div>
              </div>
              <b className="absolute top-[calc(50%_-_10px)] left-[562.55px] leading-[20px]">
                $1,742,425
              </b>
              <b className="absolute top-[calc(50%_-_10px)] left-[796px] leading-[20px]">
                $1.00
              </b>
              <b className="absolute top-[calc(50%_-_10px)] left-[1086.94px] leading-[20px] text-forestgreen">
                0.26%
              </b>
            </div>
            <div className="relative w-[1150px] h-14">
              <div className="absolute top-[calc(50%_-_10px)] left-[24px] leading-[20px] text-left">
                5
              </div>
              <div className="absolute w-[calc(100%_-_952.48px)] top-[16px] right-[804.79px] left-[147.69px] flex flex-row py-0 pr-[114.32000732421875px] pl-0 box-border items-center justify-start gap-[8px] text-left text-midnightblue-200">
                <img
                  className="relative rounded-9980xl w-6 h-6 object-cover max-w-[197.52000427246094px]"
                  alt=""
                  src="/logopng3@2x.png"
                />
                <div className="flex flex-row py-0 pr-[0.20000076293945312px] pl-0 items-start justify-start">
                  <b className="relative leading-[20px]">WBTC.e</b>
                </div>
              </div>
              <b className="absolute top-[calc(50%_-_10px)] left-[562.55px] leading-[20px]">
                $1,414,926
              </b>
              <b className="absolute top-[calc(50%_-_10px)] left-[781.56px] leading-[20px]">
                $29,352
              </b>
              <b className="absolute top-[calc(50%_-_10px)] left-[1080.33px] leading-[20px] text-salmon">
                -0.21%
              </b>
            </div>
            <div className="relative w-[1150px] h-14">
              <div className="absolute top-[calc(50%_-_10px)] left-[24px] leading-[20px] text-left">
                6
              </div>
              <div className="absolute w-[calc(100%_-_952.48px)] top-[16px] right-[804.79px] left-[147.69px] flex flex-row py-0 pr-[139.32000732421875px] pl-0 box-border items-center justify-start gap-[8px] text-left text-smi text-midnightblue-200">
                <img
                  className="relative rounded-9980xl w-6 h-6 object-cover max-w-[197.52000427246094px]"
                  alt=""
                  src="/logopng4@2x.png"
                />
                <div className="flex flex-row py-0 pr-[1.2000007629394531px] pl-0 items-start justify-start">
                  <b className="relative leading-[20px]">STG</b>
                </div>
              </div>
              <b className="absolute top-[calc(50%_-_10px)] left-[575.06px] leading-[20px]">
                $773,289
              </b>
              <b className="absolute top-[calc(50%_-_10px)] left-[796px] leading-[20px]">
                $0.61
              </b>
              <b className="absolute top-[calc(50%_-_10px)] left-[1086.94px] leading-[20px] text-forestgreen">
                0.00%
              </b>
            </div>
            <div className="relative w-[1150px] h-14">
              <div className="absolute top-[calc(50%_-_10px)] left-[24px] leading-[20px] text-left">
                7
              </div>
              <div className="absolute w-[calc(100%_-_952.48px)] top-[16px] right-[804.79px] left-[147.69px] flex flex-row py-0 pr-[116.71000671386719px] pl-0 box-border items-center justify-start gap-[8px] text-left text-midnightblue-200">
                <img
                  className="relative rounded-9980xl w-6 h-6 object-cover max-w-[197.52000427246094px]"
                  alt=""
                  src="/logopng@2x.png"
                />
                <div className="flex flex-row py-0 pr-[0.8100013732910156px] pl-0 items-start justify-start">
                  <b className="relative leading-[20px]">USDC.e</b>
                </div>
              </div>
              <b className="absolute top-[calc(50%_-_10px)] left-[575.06px] leading-[20px]">
                $381,264
              </b>
              <b className="absolute top-[calc(50%_-_10px)] left-[796px] leading-[20px]">
                $1.00
              </b>
              <b className="absolute top-[calc(50%_-_10px)] left-[1086.94px] leading-[20px] text-forestgreen">
                0.26%
              </b>
            </div>
            <div className="relative w-[1150px] h-14">
              <div className="absolute top-[calc(50%_-_10px)] left-[24px] leading-[20px] text-left">
                8
              </div>
              <div className="absolute w-[calc(100%_-_952.48px)] top-[16px] right-[804.79px] left-[147.69px] flex flex-row py-0 pr-[114.27000427246094px] pl-0 box-border items-center justify-start gap-[8px] text-left text-midnightblue-200">
                <img
                  className="relative rounded-9980xl w-6 h-6 object-cover max-w-[197.52000427246094px]"
                  alt=""
                  src="/logopng5@2x.png"
                />
                <div className="flex flex-row py-0 pr-[0.25px] pl-0 items-start justify-start">
                  <b className="relative leading-[20px]">WETH.e</b>
                </div>
              </div>
              <b className="absolute top-[calc(50%_-_10px)] left-[575.06px] leading-[20px]">
                $336,092
              </b>
              <b className="absolute top-[calc(50%_-_10px)] left-[788.84px] leading-[20px]">
                $1,843
              </b>
              <b className="absolute top-[calc(50%_-_10px)] left-[1080.33px] leading-[20px] text-salmon">
                -0.18%
              </b>
            </div>
            <div className="relative w-[1150px] h-14">
              <div className="absolute top-[calc(50%_-_10px)] left-[24px] leading-[20px] text-left">
                9
              </div>
              <div className="absolute w-[calc(100%_-_952.48px)] top-[16px] right-[804.79px] left-[147.69px] flex flex-row py-0 pr-[141.41000366210938px] pl-0 box-border items-center justify-start gap-[8px] text-left text-smi text-midnightblue-200">
                <img
                  className="relative rounded-9980xl w-6 h-6 object-cover max-w-[197.52000427246094px]"
                  alt=""
                  src="/logopng6@2x.png"
                />
                <div className="flex flex-row py-0 pr-[0.1100006103515625px] pl-0 items-start justify-start">
                  <b className="relative leading-[20px]">JOE</b>
                </div>
              </div>
              <b className="absolute top-[calc(50%_-_10px)] left-[575.06px] leading-[20px]">
                $305,615
              </b>
              <b className="absolute top-[calc(50%_-_10px)] left-[796px] leading-[20px]">
                $0.29
              </b>
              <b className="absolute top-[calc(50%_-_10px)] left-[1080.33px] leading-[20px] text-salmon">
                -4.25%
              </b>
            </div>
            <div className="relative rounded-[10px] bg-lavender-300 w-[1150px] h-14">
              <div className="absolute top-[calc(50%_-_10px)] left-[24px] leading-[20px] text-left">
                10
              </div>
              <div className="absolute w-[calc(100%_-_952.48px)] top-[16px] right-[804.79px] left-[147.69px] flex flex-row py-0 pr-[117.58000183105469px] pl-0 box-border items-center justify-start gap-[8px] text-left text-midnightblue-200">
                <img
                  className="relative rounded-9980xl w-6 h-6 object-cover max-w-[197.52000427246094px]"
                  alt=""
                  src="/logopng7@2x.png"
                />
                <div className="flex flex-row py-0 pr-[2.9399986267089844px] pl-0 items-start justify-start">
                  <b className="relative leading-[20px]">EUROC</b>
                </div>
              </div>
              <b className="absolute top-[calc(50%_-_10px)] left-[575.06px] leading-[20px]">
                $300,674
              </b>
              <b className="absolute top-[calc(50%_-_10px)] left-[796px] leading-[20px]">
                $1.10
              </b>
              <b className="absolute top-[calc(50%_-_10px)] left-[1080.33px] leading-[20px] text-salmon">
                -0.05%
              </b>
            </div>
            <div className="relative w-[1150px] h-14">
              <div className="absolute top-[calc(50%_-_10px)] left-[24px] leading-[20px] text-left">
                11
              </div>
              <div className="absolute w-[calc(100%_-_952.48px)] top-[16px] right-[804.79px] left-[147.69px] flex flex-row py-0 pr-[119.52000427246094px] pl-0 box-border items-center justify-start gap-[8px] text-left text-midnightblue-200">
                <img
                  className="relative rounded-9980xl w-6 h-6 object-cover max-w-[197.52000427246094px]"
                  alt=""
                  src="/logopng2@2x.png"
                />
                <div className="flex flex-row items-start justify-start">
                  <b className="relative leading-[20px]">USDT.e</b>
                </div>
              </div>
              <b className="absolute top-[calc(50%_-_10px)] left-[575.06px] leading-[20px]">
                $138,764
              </b>
              <b className="absolute top-[calc(50%_-_10px)] left-[796px] leading-[20px]">
                $1.00
              </b>
              <b className="absolute top-[calc(50%_-_10px)] left-[1086.94px] leading-[20px] text-forestgreen">
                0.23%
              </b>
            </div>
            <div className="relative w-[1150px] h-14">
              <div className="absolute top-[calc(50%_-_10px)] left-[24px] leading-[20px] text-left">
                12
              </div>
              <div className="absolute w-[calc(100%_-_952.48px)] top-[16px] right-[804.79px] left-[147.69px] flex flex-row py-0 pr-[137.19000244140625px] pl-0 box-border items-center justify-start gap-[8px] text-left text-smi text-midnightblue-200">
                <img
                  className="relative rounded-9980xl w-6 h-6 object-cover max-w-[197.52000427246094px]"
                  alt=""
                  src="/logopng8@2x.png"
                />
                <div className="flex flex-row py-0 pr-[1.3299999237060547px] pl-0 items-start justify-start">
                  <b className="relative leading-[20px]">MIM</b>
                </div>
              </div>
              <b className="absolute top-[calc(50%_-_10px)] left-[575.06px] leading-[20px]">
                $104,932
              </b>
              <b className="absolute top-[calc(50%_-_10px)] left-[796px] leading-[20px]">
                $1.00
              </b>
              <b className="absolute top-[calc(50%_-_10px)] left-[1086.94px] leading-[20px] text-forestgreen">
                0.58%
              </b>
            </div>
            <div className="relative w-[1150px] h-14">
              <div className="absolute top-[calc(50%_-_10px)] left-[24px] leading-[20px] text-left">
                13
              </div>
              <div className="absolute w-[calc(100%_-_952.48px)] top-[16px] right-[804.79px] left-[147.69px] flex flex-row py-0 pr-[134.52000427246094px] pl-0 box-border items-center justify-start gap-[8px] text-left text-midnightblue-200">
                <img
                  className="relative rounded-9980xl w-6 h-6 object-cover max-w-[197.52000427246094px]"
                  alt=""
                  src="/logopng9@2x.png"
                />
                <div className="flex flex-row items-start justify-start">
                  <b className="relative leading-[20px]">GMX</b>
                </div>
              </div>
              <b className="absolute top-[calc(50%_-_10px)] left-[583.34px] leading-[20px]">
                $72,604
              </b>
              <b className="absolute top-[calc(50%_-_10px)] left-[788.72px] leading-[20px]">
                $45.17
              </b>
              <b className="absolute top-[calc(50%_-_10px)] left-[1080.33px] leading-[20px] text-salmon">
                -7.99%
              </b>
            </div>
            <div className="relative w-[1150px] h-14">
              <div className="absolute top-[calc(50%_-_10px)] left-[24px] leading-[20px] text-left">
                14
              </div>
              <div className="absolute w-[calc(100%_-_952.48px)] top-[16px] right-[804.79px] left-[147.69px] flex flex-row py-0 pr-[131.86000061035156px] pl-0 box-border items-center justify-start gap-[8px] text-left text-smi text-midnightblue-200">
                <img
                  className="relative rounded-9980xl w-6 h-6 object-cover max-w-[197.52000427246094px]"
                  alt=""
                  src="/logopng10@2x.png"
                />
                <div className="flex flex-row py-0 pr-[1.6599998474121094px] pl-0 items-start justify-start">
                  <b className="relative leading-[20px]">DAI.e</b>
                </div>
              </div>
              <b className="absolute top-[calc(50%_-_10px)] left-[583.34px] leading-[20px]">
                $43,077
              </b>
              <b className="absolute top-[calc(50%_-_10px)] left-[796px] leading-[20px]">
                $1.00
              </b>
              <b className="absolute top-[calc(50%_-_10px)] left-[1086.94px] leading-[20px] text-forestgreen">
                0.16%
              </b>
            </div>
            <div className="relative w-[1150px] h-14">
              <div className="absolute top-[calc(50%_-_10px)] left-[24px] leading-[20px] text-left">
                15
              </div>
              <div className="absolute w-[calc(100%_-_952.48px)] top-[16px] right-[804.79px] left-[147.69px] flex flex-row py-0 pr-[119.1300048828125px] pl-0 box-border items-center justify-start gap-[8px] text-left text-smi text-midnightblue-200">
                <img
                  className="relative rounded-9980xl w-6 h-6 object-cover max-w-[197.52000427246094px]"
                  alt=""
                  src="/logopng11@2x.png"
                />
                <div className="flex flex-row py-0 pr-[2.3899993896484375px] pl-0 items-start justify-start">
                  <b className="relative leading-[20px]">AAVE.e</b>
                </div>
              </div>
              <b className="absolute top-[calc(50%_-_10px)] left-[583.34px] leading-[20px]">
                $41,258
              </b>
              <b className="absolute top-[calc(50%_-_10px)] left-[788.72px] leading-[20px]">
                $65.57
              </b>
              <b className="absolute top-[calc(50%_-_10px)] left-[1080.33px] leading-[20px] text-salmon">
                -0.02%
              </b>
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute top-[468.11px] left-[841.32px] w-[7.36px] h-[342.39px]"
        alt=""
        src="/vector-591.svg"
      />
      <div className="absolute top-[462px] left-[873px] text-sm leading-[130.7%] font-mukta inline-block w-[215px] h-11">
        Trade over 400 Tokens at the most competitive prices.
      </div>
      <div className="absolute top-[251px] left-[729px] flex flex-row items-center justify-start text-[15.08px] text-darkorange-100">
        <b className="relative tracking-[0.08em]">Trade</b>
      </div>
      <div className="absolute top-[208px] left-[232px] w-[400px] h-[350px] text-center text-xl">
        <div className="absolute w-full top-[0px] right-[0px] left-[0px] flex flex-row py-0 pr-[274.3800048828125px] pl-0 box-border items-start justify-start gap-[8px] text-sm">
          <div className="self-stretch rounded-xl bg-gray-300 flex flex-row pt-[7px] pb-[9px] pr-[12.169998168945312px] pl-[11px] box-border items-center justify-center min-h-[36px]">
            <div className="relative leading-[20px] font-medium">Swap</div>
          </div>
          <div className="self-stretch rounded-xl bg-gray-300 flex flex-row pt-[7px] pb-[9px] pr-[11.450000762939453px] pl-3 box-border items-center justify-center opacity-[0.4] min-h-[36px]">
            <div className="relative leading-[20px] font-medium">Limit</div>
          </div>
        </div>
        <div className="absolute w-full top-[52px] right-[0px] left-[0px] rounded-xl bg-darkslateblue overflow-hidden flex flex-col pt-3 px-3 pb-2 box-border items-end justify-start gap-[8px]">
          <div className="relative rounded-9980xl bg-gray-300 w-[121.92px] h-11 min-h-[44px] z-[1]">
            <div className="absolute top-[8px] left-[8px] rounded-9980xl w-7 h-7 overflow-hidden flex flex-row items-start justify-start">
              <img
                className="self-stretch flex-1 relative max-w-[28px] overflow-hidden max-h-full object-cover"
                alt=""
                src="/ethereumsvg@2x.png"
              />
            </div>
            <div className="absolute top-[8px] left-[calc(50%_-_14.96px)] leading-[28px] font-medium">
              ETH
            </div>
            <div className="absolute top-[14px] left-[calc(50%_+_32.96px)] w-4 h-4 overflow-hidden flex flex-row py-[5.5px] pr-[3.000000238418579px] pl-[2.999999761581421px] box-border items-start justify-start">
              <img
                className="relative w-[11.33px] h-[6.33px]"
                alt=""
                src="/vector10.svg"
              />
            </div>
          </div>
          <div className="relative w-[376px] h-9 z-[0] text-left text-lg">
            <div className="absolute top-[calc(50%_-_15px)] left-[0px] flex flex-row pt-0 px-0 pb-px items-center justify-start gap-[0.02px]">
              <div className="relative leading-[28px] font-medium">$ 2644.</div>
              <div className="flex flex-row pt-0 px-0 pb-px items-start justify-start text-sm">
                <div className="relative leading-[20px] font-semibold">37</div>
              </div>
            </div>
            <div className="absolute top-[calc(50%_-_18px)] left-[301.05px] rounded-md flex flex-row py-1 pr-[7.999996185302734px] pl-2 items-center justify-start gap-[6px] text-center">
              <div className="w-[18px] h-[18px] overflow-hidden shrink-0 flex flex-row pt-[0.49009448289871216px] pb-[0.20000141859054565px] pr-[0.200001522898674px] pl-[0.20000000298023224px] box-border items-start justify-start">
                <img
                  className="relative w-[17.6px] h-[17.31px]"
                  alt=""
                  src="/vector11.svg"
                />
              </div>
              <div className="relative w-[34.95px] h-7">
                <div className="absolute top-[-1px] left-[calc(50%_-_17.48px)] leading-[28px] font-medium">
                  0.
                </div>
                <div className="absolute top-[4px] left-[calc(50%_-_1.22px)] text-sm leading-[20px] font-semibold">
                  00
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-full top-[174px] right-[0px] left-[0px] rounded-xl bg-darkslateblue overflow-hidden flex flex-col pt-3 px-3 pb-2 box-border items-end justify-start gap-[8px] text-left">
          <div className="rounded-9980xl flex flex-row py-2 pr-[7.730003356933594px] pl-2 items-center justify-start gap-[6px] z-[1]">
            <div className="rounded-9980xl w-7 h-7 overflow-hidden shrink-0 flex flex-row items-start justify-start">
              <div className="relative bg-gainsboro w-[31px] h-[31px]" />
            </div>
            <div className="relative leading-[28px] font-medium">VAL</div>
          </div>
          <div className="relative w-[376px] h-9 z-[0] text-lg">
            <div className="absolute top-[calc(50%_-_15px)] left-[0px] flex flex-row pt-0 px-0 pb-px items-center justify-start">
              <div className="relative leading-[28px] font-medium">$ 2848.</div>
              <div className="flex flex-row pt-0 px-0 pb-px items-start justify-start ml-[-0.37px] text-sm">
                <div className="relative leading-[20px] font-semibold">48</div>
              </div>
            </div>
            <div className="absolute top-[calc(50%_-_18px)] left-[301.05px] rounded-md flex flex-row py-1 pr-[7.999996185302734px] pl-2 items-center justify-start gap-[6px] text-center text-midnightblue-100">
              <div className="w-[18px] h-[18px] overflow-hidden shrink-0 flex flex-row pt-[0.49009448289871216px] pb-[0.20000141859054565px] pr-[0.200001522898674px] pl-[0.20000000298023224px] box-border items-start justify-start">
                <img
                  className="relative w-[17.6px] h-[17.31px]"
                  alt=""
                  src="/vector12.svg"
                />
              </div>
              <div className="relative w-[34.95px] h-7">
                <div className="absolute top-[-1px] left-[calc(50%_-_17.48px)] leading-[28px] font-medium">
                  0.
                </div>
                <div className="absolute top-[4px] left-[calc(50%_-_1.22px)] text-sm leading-[20px] font-semibold">
                  00
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-full top-[298px] right-[0px] left-[0px] rounded-xl bg-darkorange-100 flex flex-row py-3.5 pr-[158.4199981689453px] pl-[158.5800018310547px] box-border items-center justify-center min-h-[52px] text-left text-base">
          <div className="relative leading-[24px] font-medium">Trade Now</div>
        </div>
        <div className="absolute top-[calc(50%_-_24px)] left-[calc(50%_-_16px)] rounded-9980xl bg-midnightblue-100 flex flex-row p-2 items-start justify-center">
          <div className="w-4 h-4 overflow-hidden shrink-0 flex flex-row pt-[1.999999761581421px] pb-[2.000000238418579px] pr-[3.000000238418579px] pl-[2.999999761581421px] box-border items-start justify-start">
            <img className="relative w-3 h-3.5" alt="" src="/vector13.svg" />
          </div>
        </div>
      </div>
      <div className="absolute w-full top-[0px] right-[0px] left-[0px] flex flex-row py-5 px-10 box-border items-center justify-between text-[19.69px] text-midnightblue-100 font-mukta">
        <img
          className="relative w-[255px] h-[43px] overflow-hidden shrink-0 cursor-pointer mq1024:w-[200px] mq744:w-[150px]"
          alt=""
          src="/valantis-logo.svg"
          onClick={onValantisImageClick}
        />
        <div className="flex flex-row items-center justify-start gap-[97px] lg:hidden md:hidden">
          <div className="w-[285px] flex flex-row items-start justify-start gap-[32px]">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[68px] flex flex-col items-start justify-start [&_.trade-inner]:hover:flex">
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[19.69px] tracking-[0.07em] font-mukta text-white text-left inline-block hover:font-bold hover:font-mukta hover:text-darkorange-100"
                onClick={onTRADEClick}
              >
                TRADE
              </button>
              <img
                className="trade-inner relative w-[41px] h-1 hidden mt-[-4px] hover:flex"
                alt=""
                src="/rectangle-5191.svg"
              />
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[66px] flex flex-col items-start justify-start [&_.pools-inner]:hover:flex [&_.pools5]:hover:font-bold [&_.pools5]:hover:font-mukta [&_.pools5]:hover:text-darkorange-100">
              <button
                className="pools5 cursor-pointer [border:none] p-0 bg-[transparent] relative text-[19.69px] tracking-[0.07em] font-mukta text-white text-left inline-block"
                onClick={onPOOLSClick}
              >
                POOLS
              </button>
              <img
                className="pools-inner relative w-[41px] h-1 hidden mt-[-4px]"
                alt=""
                src="/rectangle-5191.svg"
              />
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[83px] flex flex-col items-start justify-center [&_.docs8]:hover:font-bold [&_.docs8]:hover:font-mukta [&_.docs8]:hover:text-darkorange-100 [&_.pools-inner]:hover:flex">
              <div className="flex flex-row items-center justify-start gap-[9px]">
                <div className="docs8 relative text-[19.69px] tracking-[0.07em] font-mukta text-white text-left">
                  DOCS
                </div>
                <img
                  className="relative w-[12.85px] h-[12.85px]"
                  alt=""
                  src="/vector-941.svg"
                />
              </div>
              <img
                className="pools-inner relative w-[41px] h-1 hidden mt-[-4px]"
                alt=""
                src="/rectangle-5191.svg"
              />
            </button>
          </div>
          <div className="rounded-8xs bg-darkorange-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[188px] flex flex-row p-2.5 box-border items-center justify-center hover:bg-sandybrown">
            <b className="relative tracking-[0.07em]">Connect Wallet</b>
          </div>
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] hidden flex-col items-start justify-start gap-[7px] [&_.hamburger-menu-child6]:hover:bg-darkorange-100 [&_.hamburger-menu-child4]:hover:bg-darkorange-100 [&_.hamburger-menu-child4]:hover:bg-darkorange-100 lg:flex md:flex"
          onClick={onHamburgerMenuClick}
        >
          <div className="hamburger-menu-child4 relative bg-white w-5 h-0.5" />
          <div className="hamburger-menu-child4 relative bg-white w-5 h-0.5" />
          <div className="hamburger-menu-child6 relative bg-white w-3.5 h-0.5" />
        </button>
      </div>
    </div>
  );
};

export default Trade;
