import yayJpg from '../assets/yay.jpg';
import React from 'react'
import { insurance } from './data'
import { Anchor, Card } from 'antd';
import './index.less'
const { Link } = Anchor;

export default function HomePage() {
  console.log(insurance)
  function getOrigin(obj) {
    const _url = obj.url
    // let reg = /^(?=^.{3,255}$)(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+(:\d+)*(\/\w+\.\w+)*$/;
   const url = _url.replace(/(^https?:\/\/.*?)(:\d+)?\/.*$/,'$1')
   console.log( )
    return url ? url + '/favicon.ico' : 'https://img1.baidu.com/it/u=2891810894,871642344&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
  }

  const arr = () => {
    const _arr: any = [];
    insurance[0].children[0].children.map(item => {
      const obj:any = {name: item.title, children: []}
      // 第一层
      if(item.children) {
        item.children.map(item1 => {
            const obj2:any = {name: item1.title, children: []}
          // 第二层
          if(item1.url) {
            obj.children.push({name: item1.title, url: item1.url})
          }
          if(item1.children) {
            item1.children.map(item2 => {
              
              if(item2.url) {
                obj2.children.push({name: item2.title, url: item2.url})
              }
              if(item2.children) {
                item2.children.map(item3 => {
                  if(item3.url) {
                    obj2.children.push({name: item3.title, url: item3.url})
                  }
                })
              }
            })
            _arr.push(obj2)
          }
        })
      }
      _arr.push(obj)
     
    })
    return _arr
  }
  console.log(arr())
  const list = arr()
  return (
    <div className='nav'>
        <div className="right">
        <Anchor>
                {
                    list.map((item, index) => <Link href={`#anchor${index}`} title={item.name} />)
                }
            
            {/* <Link href="#components-anchor-demo-static" title="Static demo" />
            <Link href="#API" title="API">
            <Link href="#Anchor-Props" title="Anchor Props" />
            <Link href="#Link-Props" title="Link Props" />
            </Link> */}
        </Anchor>
        </div>
      
      {
        list.map((item,index) => <div id={`anchor${index}`}><Card className='card' title={item?.name} >
        <div className='wrap'>{
          item?.children?.map(item2 => <a href={item2?.url}><img onError={()=> {}} src={getOrigin(item2)} alt=''/>{item2?.name}</a>)
          }
          </div>
      </Card>
      </div>
      )
      }
      
      
    </div>
  );
}

