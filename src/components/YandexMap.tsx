import React, {useEffect, useRef, useState, VFC} from "react";
import * as ymaps from "yandex-maps";

const NS = 'yandexMap';

const apiKeyMap = 'b7b800f6-f8ab-4d38-bc95-ea57a91f3120';

const param = new URLSearchParams();

param.set('apikey', apiKeyMap);
param.set('lang', 'ru_RU');
param.set('ns', NS);

const mapInfo = {
  link: `https://api-maps.yandex.ru/2.1?${param.toString()}`,
};

type WindowType = typeof window & {
  [NS]: typeof ymaps | undefined
}

export const YandexMap = () => {
  const [mapApi, setMapApi] = useState((window as WindowType)[NS]);

  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapApi) return;

    const scriptEl = document.createElement("script");
    scriptEl.src = mapInfo.link;
    scriptEl.onload = () => {
      const api = (window as WindowType)[NS];
      if(!api) return null;
      api.ready(() => setMapApi((window as WindowType)[NS]));
    }
    document.body.append(scriptEl);
  }, [mapApi])

  useEffect(() => {
    if(!mapApi || !mapContainerRef.current) return;

    const map = new mapApi.Map(mapContainerRef.current, {
      type: 'yandex#map',
    })
  }, [mapApi])

  return (
    <div className='map' ref={mapContainerRef}/>
  )
}
