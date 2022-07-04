import React from 'react';
import img from '.././../images/Rectangle 1962.jpg';
import jacuzi from '.././../images/jacuzzi 54.png';
import house from '.././../images/modern-house 43.png';
import parking from '.././../images/parking-sign 54.png';
import builder from '.././../images/wide 63.png';
import star from '.././../images/star (3) 27.png';
import wishList from '.././../images/wishlist 10.png';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import reset from '.././../images/reset 1.png'
import { maxWidth } from '@mui/system';



const ImageBox = styled("div") (({theme}) => ({
  width: '329px',
  height: '230px',
  margin:'8px'
}));


const Caption = styled("div") (({theme}) => ({
  display:'flex',
  flexDirection:'column',
  rowGap:'4px'

}));

const ProductInfo = styled("div") (({theme}) =>({
  display:'flex',
  flexDirection:'column',
  rowGap: '10px',
  margin:' 0 36px 28px 20px'
}));

const SpanContainer = styled("div") (({theme}) =>({
  display:'flex',
  alignItems:'center',
  columnGap:'4px',
}));

const Price = styled("div") (({theme}) => ({
  display:'flex',
  alignItems:'center',
  justifyContent:'space-between',
  margin: '0 12px 16px 20px'

}));

const Product = styled("div") (({theme}) => ({
  background: '#FFFFFF',
  border: '1px solid #F2F2F2',
  borderRadius: '12px',
  marginBottom:'40px'

}))

export const ProductCard = () =>{
  
  return (
  
    <div classname="wrap">
      <div
      style={{
        display:'flex',
        columnGap:'28px',
        flexWrap:'wrap',
        margin: '0 60px',
      }}
    >

        <Product>
          <ImageBox>
            <img 
              src={img}
              alt='ProductImage'
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                borderRadius: '12px'
              }} 
            >
            </img>
          </ImageBox>
          <div
          style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            margin:'0 12px 32px 16px',
          }}
          >
            <Caption>
              <h3
                style={{
                  fontStyle:'normal',
                  fontWeight: '400',
                  fontSize: '14px',
                  color: '#757575',
                }}
                
              >
                Sector 46, Gurugram, Haryana
              </h3>
              <h2
                style={{
                  fontStyle:' normal',
                  fontWeight:'500',
                  fontSize: '18px',
                  color:' #101010'
                }}
              >
                3 Bhk Semi-furnished flat
              </h2>
            </Caption>
            <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '24px',
                    height: '24px',
                  }}
                >
                  <img 
                    src={wishList}
                    alt="wishlist"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
            </span>

          </div>
        

          <ProductInfo>
            <div
              style={{
                display:'flex',
                columnGap:'20px'
              }}
            >
              <SpanContainer>
                <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '12px',
                    height: '12px',
                  }}
                >
                  <img 
                    src={jacuzi}
                    alt="jacuzi"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
                </span>
                <h4
                  classname='sm'
                  style={{
                    fontStyle:' normal',
                    fontWeight:' 400',
                    fontSize: '14px',
                    color: '#757575'
                  }}
                  >
                  3 washrooms
                </h4>

              </SpanContainer>

              <SpanContainer>
                <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '12px',
                    height: '12px',
                  }}
                >
                  <img 
                    src={house}
                    alt="house"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
                </span>
                <h4
                  classname='sm'
                  style={{
                    fontStyle:' normal',
                    fontWeight:' 400',
                    fontSize: '14px',
                    color: '#757575'
                  }}
                  >
                  Builder floor
                </h4>

              </SpanContainer>
            </div>

            <div
            style={{
              display:'flex',
              columnGap:'20px'
            }}
            >
              <SpanContainer
                style={{
                  display:'flex',
                  alignItems:'center',
                }}
              >
                <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '12px',
                    height: '12px',
                  }}
                >
                  <img 
                    src={parking}
                    alt="jacuzi"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
                </span>
                <h4
                  classname='sm'
                  style={{
                    fontStyle:' normal',
                    fontWeight:' 400',
                    fontSize: '14px',
                    color: '#757575'
                  }}
                  >
                  Open Parking
                </h4>

              </SpanContainer>
              <SpanContainer
                style={{
                  display:'flex',
                  alignItems:'center',
                }}
              >
                <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '12px',
                    height: '12px',
                  }}
                >
                  <img 
                    src={builder}
                    alt="jacuzi"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
                </span>
                <h4
                  classname='sm'
                  style={{
                    fontStyle:' normal',
                    fontWeight:' 400',
                    fontSize: '14px',
                    color: '#757575'
                  }}
                  >
                  1200 sq. ft.
                </h4>

              </SpanContainer>
            </div>

          </ProductInfo>

          <Price>
            <div>
              <h4
                style={{
                  fontStyle: 'normal',
                  fontWeight:'400',
                  fontSize:'14px',
                  color:' #757575'

                }}
              >
                Monthly Rent
              </h4>
              <h3
                style={{
                  fontStyle: 'normal',
                  fontWeight:'600',
                  fontSize:'18px',
                  color: '#101010'
                }}
              >
                Rs. 30,000
              </h3>

            </div>

            <span
              style={{
                display:'flex',
                alignItems:'center',
                columnGap:'24px'
              }}
            >
              <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '12px',
                    height: '12px',
                  }}
                >
                  <img 
                    src={star}
                    alt="star"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
                  3.6
              </span>
              <h4
                style={{
                  fontStyle: 'normal',
                  fontWeight: '600',
                  fontSize: '14px',
                  color: '#808080'

                }}
              >
              (10)
              </h4>
            </span>
          
          </Price>
        </Product>
        <Product>
          <ImageBox>
            <img 
              src={img}
              alt='ProductImage'
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                borderRadius: '12px'
              }} 
            >
            </img>
          </ImageBox>
          <div
          style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            margin:'0 12px 32px 16px',
          }}
          >
            <Caption>
              <h3
                style={{
                  fontStyle:'normal',
                  fontWeight: '400',
                  fontSize: '14px',
                  color: '#757575',
                }}
                
              >
                Sector 46, Gurugram, Haryana
              </h3>
              <h2
                style={{
                  fontStyle:' normal',
                  fontWeight:'500',
                  fontSize: '18px',
                  color:' #101010'
                }}
              >
                3 Bhk Semi-furnished flat
              </h2>
            </Caption>
            <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '24px',
                    height: '24px',
                  }}
                >
                  <img 
                    src={wishList}
                    alt="wishlist"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
            </span>

          </div>
        

          <ProductInfo>
            <div
              style={{
                display:'flex',
                columnGap:'20px'
              }}
            >
              <SpanContainer>
                <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '12px',
                    height: '12px',
                  }}
                >
                  <img 
                    src={jacuzi}
                    alt="jacuzi"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
                </span>
                <h4
                  classname='sm'
                  style={{
                    fontStyle:' normal',
                    fontWeight:' 400',
                    fontSize: '14px',
                    color: '#757575'
                  }}
                  >
                  3 washrooms
                </h4>

              </SpanContainer>

              <SpanContainer>
                <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '12px',
                    height: '12px',
                  }}
                >
                  <img 
                    src={house}
                    alt="house"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
                </span>
                <h4
                  classname='sm'
                  style={{
                    fontStyle:' normal',
                    fontWeight:' 400',
                    fontSize: '14px',
                    color: '#757575'
                  }}
                  >
                  Builder floor
                </h4>

              </SpanContainer>
            </div>

            <div
            style={{
              display:'flex',
              columnGap:'20px'
            }}
            >
              <SpanContainer
                style={{
                  display:'flex',
                  alignItems:'center',
                }}
              >
                <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '12px',
                    height: '12px',
                  }}
                >
                  <img 
                    src={parking}
                    alt="jacuzi"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
                </span>
                <h4
                  classname='sm'
                  style={{
                    fontStyle:' normal',
                    fontWeight:' 400',
                    fontSize: '14px',
                    color: '#757575'
                  }}
                  >
                  Open Parking
                </h4>

              </SpanContainer>
              <SpanContainer
                style={{
                  display:'flex',
                  alignItems:'center',
                }}
              >
                <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '12px',
                    height: '12px',
                  }}
                >
                  <img 
                    src={builder}
                    alt="jacuzi"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
                </span>
                <h4
                  classname='sm'
                  style={{
                    fontStyle:' normal',
                    fontWeight:' 400',
                    fontSize: '14px',
                    color: '#757575'
                  }}
                  >
                  1200 sq. ft.
                </h4>

              </SpanContainer>
            </div>

          </ProductInfo>

          <Price>
            <div>
              <h4
                style={{
                  fontStyle: 'normal',
                  fontWeight:'400',
                  fontSize:'14px',
                  color:' #757575'

                }}
              >
                Monthly Rent
              </h4>
              <h3
                style={{
                  fontStyle: 'normal',
                  fontWeight:'600',
                  fontSize:'18px',
                  color: '#101010'
                }}
              >
                Rs. 30,000
              </h3>

            </div>

            <span
              style={{
                display:'flex',
                alignItems:'center',
                columnGap:'24px'
              }}
            >
              <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '12px',
                    height: '12px',
                  }}
                >
                  <img 
                    src={star}
                    alt="star"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
                  3.6
              </span>
              <h4
                style={{
                  fontStyle: 'normal',
                  fontWeight: '600',
                  fontSize: '14px',
                  color: '#808080'

                }}
              >
              (10)
              </h4>
            </span>
          
          </Price>
        </Product>
        <Product>
          <ImageBox>
            <img 
              src={img}
              alt='ProductImage'
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                borderRadius: '12px'
              }} 
            >
            </img>
          </ImageBox>
          <div
          style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            margin:'0 12px 32px 16px',
          }}
          >
            <Caption>
              <h3
                style={{
                  fontStyle:'normal',
                  fontWeight: '400',
                  fontSize: '14px',
                  color: '#757575',
                }}
                
              >
                Sector 46, Gurugram, Haryana
              </h3>
              <h2
                style={{
                  fontStyle:' normal',
                  fontWeight:'500',
                  fontSize: '18px',
                  color:' #101010'
                }}
              >
                3 Bhk Semi-furnished flat
              </h2>
            </Caption>
            <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '24px',
                    height: '24px',
                  }}
                >
                  <img 
                    src={wishList}
                    alt="wishlist"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
            </span>

          </div>
        

          <ProductInfo>
            <div
              style={{
                display:'flex',
                columnGap:'20px'
              }}
            >
              <SpanContainer>
                <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '12px',
                    height: '12px',
                  }}
                >
                  <img 
                    src={jacuzi}
                    alt="jacuzi"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
                </span>
                <h4
                  classname='sm'
                  style={{
                    fontStyle:' normal',
                    fontWeight:' 400',
                    fontSize: '14px',
                    color: '#757575'
                  }}
                  >
                  3 washrooms
                </h4>

              </SpanContainer>

              <SpanContainer>
                <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '12px',
                    height: '12px',
                  }}
                >
                  <img 
                    src={house}
                    alt="house"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
                </span>
                <h4
                  classname='sm'
                  style={{
                    fontStyle:' normal',
                    fontWeight:' 400',
                    fontSize: '14px',
                    color: '#757575'
                  }}
                  >
                  Builder floor
                </h4>

              </SpanContainer>
            </div>

            <div
            style={{
              display:'flex',
              columnGap:'20px'
            }}
            >
              <SpanContainer
                style={{
                  display:'flex',
                  alignItems:'center',
                }}
              >
                <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '12px',
                    height: '12px',
                  }}
                >
                  <img 
                    src={parking}
                    alt="jacuzi"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
                </span>
                <h4
                  classname='sm'
                  style={{
                    fontStyle:' normal',
                    fontWeight:' 400',
                    fontSize: '14px',
                    color: '#757575'
                  }}
                  >
                  Open Parking
                </h4>

              </SpanContainer>
              <SpanContainer
                style={{
                  display:'flex',
                  alignItems:'center',
                }}
              >
                <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '12px',
                    height: '12px',
                  }}
                >
                  <img 
                    src={builder}
                    alt="jacuzi"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
                </span>
                <h4
                  classname='sm'
                  style={{
                    fontStyle:' normal',
                    fontWeight:' 400',
                    fontSize: '14px',
                    color: '#757575'
                  }}
                  >
                  1200 sq. ft.
                </h4>

              </SpanContainer>
            </div>

          </ProductInfo>

          <Price>
            <div>
              <h4
                style={{
                  fontStyle: 'normal',
                  fontWeight:'400',
                  fontSize:'14px',
                  color:' #757575'

                }}
              >
                Monthly Rent
              </h4>
              <h3
                style={{
                  fontStyle: 'normal',
                  fontWeight:'600',
                  fontSize:'18px',
                  color: '#101010'
                }}
              >
                Rs. 30,000
              </h3>

            </div>

            <span
              style={{
                display:'flex',
                alignItems:'center',
                columnGap:'24px'
              }}
            >
              <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '12px',
                    height: '12px',
                  }}
                >
                  <img 
                    src={star}
                    alt="star"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
                  3.6
              </span>
              <h4
                style={{
                  fontStyle: 'normal',
                  fontWeight: '600',
                  fontSize: '14px',
                  color: '#808080'

                }}
              >
              (10)
              </h4>
            </span>
          
          </Price>
        </Product>
        <Product>
          <ImageBox>
            <img 
              src={img}
              alt='ProductImage'
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                borderRadius: '12px'
              }} 
            >
            </img>
          </ImageBox>
          <div
          style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            margin:'0 12px 32px 16px',
          }}
          >
            <Caption>
              <h3
                style={{
                  fontStyle:'normal',
                  fontWeight: '400',
                  fontSize: '14px',
                  color: '#757575',
                }}
                
              >
                Sector 46, Gurugram, Haryana
              </h3>
              <h2
                style={{
                  fontStyle:' normal',
                  fontWeight:'500',
                  fontSize: '18px',
                  color:' #101010'
                }}
              >
                3 Bhk Semi-furnished flat
              </h2>
            </Caption>
            <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '24px',
                    height: '24px',
                  }}
                >
                  <img 
                    src={wishList}
                    alt="wishlist"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
            </span>

          </div>
        

          <ProductInfo>
            <div
              style={{
                display:'flex',
                columnGap:'20px'
              }}
            >
              <SpanContainer>
                <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '12px',
                    height: '12px',
                  }}
                >
                  <img 
                    src={jacuzi}
                    alt="jacuzi"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
                </span>
                <h4
                  classname='sm'
                  style={{
                    fontStyle:' normal',
                    fontWeight:' 400',
                    fontSize: '14px',
                    color: '#757575'
                  }}
                  >
                  3 washrooms
                </h4>

              </SpanContainer>

              <SpanContainer>
                <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '12px',
                    height: '12px',
                  }}
                >
                  <img 
                    src={house}
                    alt="house"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
                </span>
                <h4
                  classname='sm'
                  style={{
                    fontStyle:' normal',
                    fontWeight:' 400',
                    fontSize: '14px',
                    color: '#757575'
                  }}
                  >
                  Builder floor
                </h4>

              </SpanContainer>
            </div>

            <div
            style={{
              display:'flex',
              columnGap:'20px'
            }}
            >
              <SpanContainer
                style={{
                  display:'flex',
                  alignItems:'center',
                }}
              >
                <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '12px',
                    height: '12px',
                  }}
                >
                  <img 
                    src={parking}
                    alt="jacuzi"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
                </span>
                <h4
                  classname='sm'
                  style={{
                    fontStyle:' normal',
                    fontWeight:' 400',
                    fontSize: '14px',
                    color: '#757575'
                  }}
                  >
                  Open Parking
                </h4>

              </SpanContainer>
              <SpanContainer
                style={{
                  display:'flex',
                  alignItems:'center',
                }}
              >
                <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '12px',
                    height: '12px',
                  }}
                >
                  <img 
                    src={builder}
                    alt="jacuzi"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
                </span>
                <h4
                  classname='sm'
                  style={{
                    fontStyle:' normal',
                    fontWeight:' 400',
                    fontSize: '14px',
                    color: '#757575'
                  }}
                  >
                  1200 sq. ft.
                </h4>

              </SpanContainer>
            </div>

          </ProductInfo>

          <Price>
            <div>
              <h4
                style={{
                  fontStyle: 'normal',
                  fontWeight:'400',
                  fontSize:'14px',
                  color:' #757575'

                }}
              >
                Monthly Rent
              </h4>
              <h3
                style={{
                  fontStyle: 'normal',
                  fontWeight:'600',
                  fontSize:'18px',
                  color: '#101010'
                }}
              >
                Rs. 30,000
              </h3>

            </div>

            <span
              style={{
                display:'flex',
                alignItems:'center',
                columnGap:'24px'
              }}
            >
              <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '12px',
                    height: '12px',
                  }}
                >
                  <img 
                    src={star}
                    alt="star"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
                  3.6
              </span>
              <h4
                style={{
                  fontStyle: 'normal',
                  fontWeight: '600',
                  fontSize: '14px',
                  color: '#808080'

                }}
              >
              (10)
              </h4>
            </span>
          
          </Price>
        </Product>
          <Product>
          <ImageBox>
            <img 
              src={img}
              alt='ProductImage'
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                borderRadius: '12px'
              }} 
            >
            </img>
          </ImageBox>
          <div
          style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            margin:'0 12px 32px 16px',
          }}
          >
            <Caption>
              <h3
                style={{
                  fontStyle:'normal',
                  fontWeight: '400',
                  fontSize: '14px',
                  color: '#757575',
                }}
                
              >
                Sector 46, Gurugram, Haryana
              </h3>
              <h2
                style={{
                  fontStyle:' normal',
                  fontWeight:'500',
                  fontSize: '18px',
                  color:' #101010'
                }}
              >
                3 Bhk Semi-furnished flat
              </h2>
            </Caption>
            <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '24px',
                    height: '24px',
                  }}
                >
                  <img 
                    src={wishList}
                    alt="wishlist"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
            </span>

          </div>
        

          <ProductInfo>
            <div
              style={{
                display:'flex',
                columnGap:'20px'
              }}
            >
              <SpanContainer>
                <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '12px',
                    height: '12px',
                  }}
                >
                  <img 
                    src={jacuzi}
                    alt="jacuzi"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
                </span>
                <h4
                  classname='sm'
                  style={{
                    fontStyle:' normal',
                    fontWeight:' 400',
                    fontSize: '14px',
                    color: '#757575'
                  }}
                  >
                  3 washrooms
                </h4>

              </SpanContainer>

              <SpanContainer>
                <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '12px',
                    height: '12px',
                  }}
                >
                  <img 
                    src={house}
                    alt="house"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
                </span>
                <h4
                  classname='sm'
                  style={{
                    fontStyle:' normal',
                    fontWeight:' 400',
                    fontSize: '14px',
                    color: '#757575'
                  }}
                  >
                  Builder floor
                </h4>

              </SpanContainer>
            </div>

            <div
            style={{
              display:'flex',
              columnGap:'20px'
            }}
            >
              <SpanContainer
                style={{
                  display:'flex',
                  alignItems:'center',
                }}
              >
                <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '12px',
                    height: '12px',
                  }}
                >
                  <img 
                    src={parking}
                    alt="jacuzi"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
                </span>
                <h4
                  classname='sm'
                  style={{
                    fontStyle:' normal',
                    fontWeight:' 400',
                    fontSize: '14px',
                    color: '#757575'
                  }}
                  >
                  Open Parking
                </h4>

              </SpanContainer>
              <SpanContainer
                style={{
                  display:'flex',
                  alignItems:'center',
                }}
              >
                <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '12px',
                    height: '12px',
                  }}
                >
                  <img 
                    src={builder}
                    alt="jacuzi"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
                </span>
                <h4
                  classname='sm'
                  style={{
                    fontStyle:' normal',
                    fontWeight:' 400',
                    fontSize: '14px',
                    color: '#757575'
                  }}
                  >
                  1200 sq. ft.
                </h4>

              </SpanContainer>
            </div>

          </ProductInfo>

          <Price>
            <div>
              <h4
                style={{
                  fontStyle: 'normal',
                  fontWeight:'400',
                  fontSize:'14px',
                  color:' #757575'

                }}
              >
                Monthly Rent
              </h4>
              <h3
                style={{
                  fontStyle: 'normal',
                  fontWeight:'600',
                  fontSize:'18px',
                  color: '#101010'
                }}
              >
                Rs. 30,000
              </h3>

            </div>

            <span
              style={{
                display:'flex',
                alignItems:'center',
                columnGap:'24px'
              }}
            >
              <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '12px',
                    height: '12px',
                  }}
                >
                  <img 
                    src={star}
                    alt="star"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
                  3.6
              </span>
              <h4
                style={{
                  fontStyle: 'normal',
                  fontWeight: '600',
                  fontSize: '14px',
                  color: '#808080'

                }}
              >
              (10)
              </h4>
            </span>
          
          </Price>
        </Product>
        <Product>
          <ImageBox>
            <img 
              src={img}
              alt='ProductImage'
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                borderRadius: '12px'
              }} 
            >
            </img>
          </ImageBox>
          <div
          style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            margin:'0 12px 32px 16px',
          }}
          >
            <Caption>
              <h3
                style={{
                  fontStyle:'normal',
                  fontWeight: '400',
                  fontSize: '14px',
                  color: '#757575',
                }}
                
              >
                Sector 46, Gurugram, Haryana
              </h3>
              <h2
                style={{
                  fontStyle:' normal',
                  fontWeight:'500',
                  fontSize: '18px',
                  color:' #101010'
                }}
              >
                3 Bhk Semi-furnished flat
              </h2>
            </Caption>
            <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '24px',
                    height: '24px',
                  }}
                >
                  <img 
                    src={wishList}
                    alt="wishlist"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
            </span>

          </div>
        

          <ProductInfo>
            <div
              style={{
                display:'flex',
                columnGap:'20px'
              }}
            >
              <SpanContainer>
                <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '12px',
                    height: '12px',
                  }}
                >
                  <img 
                    src={jacuzi}
                    alt="jacuzi"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
                </span>
                <h4
                  classname='sm'
                  style={{
                    fontStyle:' normal',
                    fontWeight:' 400',
                    fontSize: '14px',
                    color: '#757575'
                  }}
                  >
                  3 washrooms
                </h4>

              </SpanContainer>

              <SpanContainer>
                <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '12px',
                    height: '12px',
                  }}
                >
                  <img 
                    src={house}
                    alt="house"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
                </span>
                <h4
                  classname='sm'
                  style={{
                    fontStyle:' normal',
                    fontWeight:' 400',
                    fontSize: '14px',
                    color: '#757575'
                  }}
                  >
                  Builder floor
                </h4>

              </SpanContainer>
            </div>

            <div
            style={{
              display:'flex',
              columnGap:'20px'
            }}
            >
              <SpanContainer
                style={{
                  display:'flex',
                  alignItems:'center',
                }}
              >
                <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '12px',
                    height: '12px',
                  }}
                >
                  <img 
                    src={parking}
                    alt="jacuzi"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
                </span>
                <h4
                  classname='sm'
                  style={{
                    fontStyle:' normal',
                    fontWeight:' 400',
                    fontSize: '14px',
                    color: '#757575'
                  }}
                  >
                  Open Parking
                </h4>

              </SpanContainer>
              <SpanContainer
                style={{
                  display:'flex',
                  alignItems:'center',
                }}
              >
                <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '12px',
                    height: '12px',
                  }}
                >
                  <img 
                    src={builder}
                    alt="jacuzi"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
                </span>
                <h4
                  classname='sm'
                  style={{
                    fontStyle:' normal',
                    fontWeight:' 400',
                    fontSize: '14px',
                    color: '#757575'
                  }}
                  >
                  1200 sq. ft.
                </h4>

              </SpanContainer>
            </div>

          </ProductInfo>

          <Price>
            <div>
              <h4
                style={{
                  fontStyle: 'normal',
                  fontWeight:'400',
                  fontSize:'14px',
                  color:' #757575'

                }}
              >
                Monthly Rent
              </h4>
              <h3
                style={{
                  fontStyle: 'normal',
                  fontWeight:'600',
                  fontSize:'18px',
                  color: '#101010'
                }}
              >
                Rs. 30,000
              </h3>

            </div>

            <span
              style={{
                display:'flex',
                alignItems:'center',
                columnGap:'24px'
              }}
            >
              <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '12px',
                    height: '12px',
                  }}
                >
                  <img 
                    src={star}
                    alt="star"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
                  3.6
              </span>
              <h4
                style={{
                  fontStyle: 'normal',
                  fontWeight: '600',
                  fontSize: '14px',
                  color: '#808080'

                }}
              >
              (10)
              </h4>
            </span>
          
          </Price>
        </Product>
          <Product>
          <ImageBox>
            <img 
              src={img}
              alt='ProductImage'
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                borderRadius: '12px'
              }} 
            >
            </img>
          </ImageBox>
          <div
          style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            margin:'0 12px 32px 16px',
          }}
          >
            <Caption>
              <h3
                style={{
                  fontStyle:'normal',
                  fontWeight: '400',
                  fontSize: '14px',
                  color: '#757575',
                }}
                
              >
                Sector 46, Gurugram, Haryana
              </h3>
              <h2
                style={{
                  fontStyle:' normal',
                  fontWeight:'500',
                  fontSize: '18px',
                  color:' #101010'
                }}
              >
                3 Bhk Semi-furnished flat
              </h2>
            </Caption>
            <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '24px',
                    height: '24px',
                  }}
                >
                  <img 
                    src={wishList}
                    alt="wishlist"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
            </span>

          </div>
        

          <ProductInfo>
            <div
              style={{
                display:'flex',
                columnGap:'20px'
              }}
            >
              <SpanContainer>
                <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '12px',
                    height: '12px',
                  }}
                >
                  <img 
                    src={jacuzi}
                    alt="jacuzi"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
                </span>
                <h4
                  classname='sm'
                  style={{
                    fontStyle:' normal',
                    fontWeight:' 400',
                    fontSize: '14px',
                    color: '#757575'
                  }}
                  >
                  3 washrooms
                </h4>

              </SpanContainer>

              <SpanContainer>
                <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '12px',
                    height: '12px',
                  }}
                >
                  <img 
                    src={house}
                    alt="house"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
                </span>
                <h4
                  classname='sm'
                  style={{
                    fontStyle:' normal',
                    fontWeight:' 400',
                    fontSize: '14px',
                    color: '#757575'
                  }}
                  >
                  Builder floor
                </h4>

              </SpanContainer>
            </div>

            <div
            style={{
              display:'flex',
              columnGap:'20px'
            }}
            >
              <SpanContainer
                style={{
                  display:'flex',
                  alignItems:'center',
                }}
              >
                <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '12px',
                    height: '12px',
                  }}
                >
                  <img 
                    src={parking}
                    alt="jacuzi"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
                </span>
                <h4
                  classname='sm'
                  style={{
                    fontStyle:' normal',
                    fontWeight:' 400',
                    fontSize: '14px',
                    color: '#757575'
                  }}
                  >
                  Open Parking
                </h4>

              </SpanContainer>
              <SpanContainer
                style={{
                  display:'flex',
                  alignItems:'center',
                }}
              >
                <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '12px',
                    height: '12px',
                  }}
                >
                  <img 
                    src={builder}
                    alt="jacuzi"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
                </span>
                <h4
                  classname='sm'
                  style={{
                    fontStyle:' normal',
                    fontWeight:' 400',
                    fontSize: '14px',
                    color: '#757575'
                  }}
                  >
                  1200 sq. ft.
                </h4>

              </SpanContainer>
            </div>

          </ProductInfo>

          <Price>
            <div>
              <h4
                style={{
                  fontStyle: 'normal',
                  fontWeight:'400',
                  fontSize:'14px',
                  color:' #757575'

                }}
              >
                Monthly Rent
              </h4>
              <h3
                style={{
                  fontStyle: 'normal',
                  fontWeight:'600',
                  fontSize:'18px',
                  color: '#101010'
                }}
              >
                Rs. 30,000
              </h3>

            </div>

            <span
              style={{
                display:'flex',
                alignItems:'center',
                columnGap:'24px'
              }}
            >
              <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '12px',
                    height: '12px',
                  }}
                >
                  <img 
                    src={star}
                    alt="star"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
                  3.6
              </span>
              <h4
                style={{
                  fontStyle: 'normal',
                  fontWeight: '600',
                  fontSize: '14px',
                  color: '#808080'

                }}
              >
              (10)
              </h4>
            </span>
          
          </Price>
        </Product>
        <Product>
          <ImageBox>
            <img 
              src={img}
              alt='ProductImage'
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                borderRadius: '12px'
              }} 
            >
            </img>
          </ImageBox>
          <div
          style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            margin:'0 12px 32px 16px',
          }}
          >
            <Caption>
              <h3
                style={{
                  fontStyle:'normal',
                  fontWeight: '400',
                  fontSize: '14px',
                  color: '#757575',
                }}
                
              >
                Sector 46, Gurugram, Haryana
              </h3>
              <h2
                style={{
                  fontStyle:' normal',
                  fontWeight:'500',
                  fontSize: '18px',
                  color:' #101010'
                }}
              >
                3 Bhk Semi-furnished flat
              </h2>
            </Caption>
            <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '24px',
                    height: '24px',
                  }}
                >
                  <img 
                    src={wishList}
                    alt="wishlist"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
            </span>

          </div>
        

          <ProductInfo>
            <div
              style={{
                display:'flex',
                columnGap:'20px'
              }}
            >
              <SpanContainer>
                <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '12px',
                    height: '12px',
                  }}
                >
                  <img 
                    src={jacuzi}
                    alt="jacuzi"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
                </span>
                <h4
                  classname='sm'
                  style={{
                    fontStyle:' normal',
                    fontWeight:' 400',
                    fontSize: '14px',
                    color: '#757575'
                  }}
                  >
                  3 washrooms
                </h4>

              </SpanContainer>

              <SpanContainer>
                <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '12px',
                    height: '12px',
                  }}
                >
                  <img 
                    src={house}
                    alt="house"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
                </span>
                <h4
                  classname='sm'
                  style={{
                    fontStyle:' normal',
                    fontWeight:' 400',
                    fontSize: '14px',
                    color: '#757575'
                  }}
                  >
                  Builder floor
                </h4>

              </SpanContainer>
            </div>

            <div
            style={{
              display:'flex',
              columnGap:'20px'
            }}
            >
              <SpanContainer
                style={{
                  display:'flex',
                  alignItems:'center',
                }}
              >
                <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '12px',
                    height: '12px',
                  }}
                >
                  <img 
                    src={parking}
                    alt="jacuzi"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
                </span>
                <h4
                  classname='sm'
                  style={{
                    fontStyle:' normal',
                    fontWeight:' 400',
                    fontSize: '14px',
                    color: '#757575'
                  }}
                  >
                  Open Parking
                </h4>

              </SpanContainer>
              <SpanContainer
                style={{
                  display:'flex',
                  alignItems:'center',
                }}
              >
                <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '12px',
                    height: '12px',
                  }}
                >
                  <img 
                    src={builder}
                    alt="jacuzi"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
                </span>
                <h4
                  classname='sm'
                  style={{
                    fontStyle:' normal',
                    fontWeight:' 400',
                    fontSize: '14px',
                    color: '#757575'
                  }}
                  >
                  1200 sq. ft.
                </h4>

              </SpanContainer>
            </div>

          </ProductInfo>

          <Price>
            <div>
              <h4
                style={{
                  fontStyle: 'normal',
                  fontWeight:'400',
                  fontSize:'14px',
                  color:' #757575'

                }}
              >
                Monthly Rent
              </h4>
              <h3
                style={{
                  fontStyle: 'normal',
                  fontWeight:'600',
                  fontSize:'18px',
                  color: '#101010'
                }}
              >
                Rs. 30,000
              </h3>

            </div>

            <span
              style={{
                display:'flex',
                alignItems:'center',
                columnGap:'24px'
              }}
            >
              <span
                style={{
                  display:'flex',
                    alignItems:'center',
                    width: '12px',
                    height: '12px',
                  }}
                >
                  <img 
                    src={star}
                    alt="star"
                    style={{
                      diaplay:'inline-block',
                      objectFit: 'contain'
                    }} 
                  />
                  3.6
              </span>
              <h4
                style={{
                  fontStyle: 'normal',
                  fontWeight: '600',
                  fontSize: '14px',
                  color: '#808080'

                }}
              >
              (10)
              </h4>
            </span>
          
          </Price>
        </Product>
      
      </div>
    </div>

    
    
  )
}
