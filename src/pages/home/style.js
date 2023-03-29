import styled from "styled-components";

export const HomeWrapper = styled.div`
    width: 960px;
    margin:0 auto;
`

export const HomeLeft = styled.div`
    float:left;
    width: 625px;
    margin-left:15px;
    padding-top:30px;
   .banner_img{
        width: 625px;
        height: 270px;
        border-radius:5px;
   }
`
export const HomeRight = styled.div`
    width: 280px;
    float:right;
`

export const TopicWrapper = styled.div`
    overflow:hidden;
    padding:20px 0 10px 0;
    margin-left:-18px;
    border-radius:4px;
    border-bottom:1px solid #dcdcdc;
`

export const TopicItem = styled.div`
    float:left;
    height: 32px;
    line-height:32px;
    margin-left:18px;
    margin-bottom:18px;
    padding-right:10px;
    font-size: 14px;
    background:#f7f7f7;
    color:#000;
    border:1px solid #dcdcdc;
    border-radius:4px;
    .topic-pic{
        display:block;
        float:left;
        width: 32px;
        height: 32px;
        margin-right:10px;
    }
`

/* export const MoreItem = styled.div()`
    float:left;
    height: 32px;
    line-height:32px;
    margin-left:18px;
    margin-bottom:18px;
    padding-right:10px;
    font-size: 14px;
    color:#000;
` */

export const ListItem = styled.div`
    overflow:hidden;
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    .pic{
        display:block;
        float: right;
        margin-top:10px;
        width: 148px;
        height: 100px;
        border:1px solid #f0f0f0;
        border-radius:10px;
    }
`

export const ListInfo = styled.div`
    width: 475px;
    float: left;
    .title{
        line-height: 27px;
        font-size: 18px;
        font-weight:bold;
        color:#333;
    }
    .desc{
        line-height: 24px;
        margin-bottom:8px;
        /* margin-right: */
        font-size:13px;
        color:#999;
    }
`
export const RecommendWrapper = styled.div`
    margin:30px 0;
    width: 280px;
    padding-bottom:10px;
    border-bottom:1px solid #f0f0f0;
`

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    margin-bottom:6px;
    /* 下面是styled-components的一个写法 */
    background:url(${(props) => props.imgUrl});
    background-size:contain;
`
export const WriterWrapper = styled.div`
    width: 278px;
    height: 300px;
    line-height: 300;
    text-align: center;
    /* box-sizing:border-box; */
`

export const WriterTitle = styled.div`
    width: 278px;
    height: 20px;
    /* 这里需要对器进行剧中，不然，字就跑下面去了 */
    line-height: 20px;
    font-size:14px;
    color:#969696;
    span.left{
        float:left;
    }
    span.right{
        float:right;
    }
`

export const RecommandWriter = styled.ul`
    width: 280px;
    margin-bottom:20px;
    text-align:left;
    /* padding-left:0; */
`

export const WriterItem = styled.li`
    width: 280px;
    height: 47px;
    line-height: 20px;
    /* text-align:-webkit-match-parent; */
    margin-top:15px;  
    span{
        width: 220px;
        height: 20px;     
        padding-top: 5px;
        margin-left:10px;
        margin-right:60px;
        font-size:14px;
        display:block;
        color:#333  ;
    }
    p{
        float:left;
        margin-top:3px;
        font-size: 12px;
        color:#969696;
    }
`

export const WriterNav = styled.a.attrs({
    href: `${(props) => props.PerUrl}`
})`
    float:left;
    width: 48px;
    height: 48px;
    margin-right:10px;  
    line-height:47px;
    .remond_img{ 
        width: 100%;
        height: 100%;    
        border:1px solid #ddd;
        border-radius:50%;
    }
`
export const FocusWriter = styled.a.attrs({
    href: 'https://www.jianshu.com/sign_in?utm_source=desktop&utm_medium=not-signed-in-index-user-follow-button'
})`
    float:right;
    width: 37px;
    height: 17px;
    line-height:18px;
    margin-top:5px;
    padding: 0;
    font-size:13px;
    color:#42c02e;
    text-decoration:none;
`

export const LodeMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin:30px 0;
    background-color:#a5a5a5;
    text-align: center;
    font-size:15px;
    color: #fff;
    border-radius:20px;
    cursor:pointer;
`

export const BackTop = styled.div`
    position:fixed;
    right:60px;
    bottom:80px;
    width: 60px;
    height: 60px;
    line-height:60px;
    text-align:center;
    border:1px solid #ccc;
    font-size:14px;
    cursor:pointer
`