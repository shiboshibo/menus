import yayJpg from '../assets/yay.jpg';
import React from 'react';
import { insurance } from './data';
import { Anchor, Card } from 'antd';
import ImgOccupy from '@/assets/earth.jpg'
import './index.less';
const { Link } = Anchor;

export default function HomePage() {
  console.log(insurance);
  function getOrigin(obj: any) {
    const _url = obj.url;
    // let reg = /^(?=^.{3,255}$)(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+(:\d+)*(\/\w+\.\w+)*$/;
    const url = _url.replace(/(^https?:\/\/.*?)(:\d+)?\/.*$/, '$1');
    console.log();
    return url
      ? url + '/favicon.ico'
      : 'https://img1.baidu.com/it/u=2891810894,871642344&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500';
  }

  const arr = () => {
    const _arr: any = [];
    insurance[0].children[0].children.forEach((item) => {
      const obj: any = { name: item.title, children: [] };
      // 第一层
      if (item.children) {
        item.children.forEach((item1) => {
          const obj2: any = { name: item1.title, children: [] };
          // 第二层,
          // TODO 封装递归
          if (item1.url) {
            obj.children.push({ name: item1.title, url: item1.url });
          }
          if (item1.children) {
            item1.children.forEach((item2) => {
              if (item2.url) {
                obj2.children.push({ name: item2.title, url: item2.url });
              }
              if (item2.children) {
                item2.children.forEach((item3) => {
                  if (item3.url) {
                    obj2.children.push({ name: item3.title, url: item3.url });
                  }
                });
              }
            });
            _arr.push(obj2);
          }
        });
      }
      _arr.push(obj);
    });
    return _arr;
  };
  console.log(arr());
  const list = arr();
  const onImgError = function(id: string) {
   const dom:any = document.getElementById(id)
   dom.src = ImgOccupy
  }
  return (
    <div className="nav">
      <div className="right">
        <Anchor>
          {list.map((item: any, index: any) => (
            <Link key={index} href={`#anchor${index}`} title={item.name} />
          ))}
        </Anchor>
      </div>

      {list.map((item: any, index: any) => (
        <div id={`anchor${index}`} key={index}>
          <Card className="card" title={item?.name}>
            <div className="wrap">
              {item?.children?.map((item2: any, index2:any) => (
                <a href={item2?.url} key={item2.name}>
                  <img id={`new${index}${index2}`} onError={() => onImgError(`new${index}${index2}`)} src={getOrigin(item2)} alt="" />
                  <span>{item2?.name}</span>
                </a>
              ))}
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}
