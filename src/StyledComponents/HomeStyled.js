import styled from "styled-components";

export const HomeStyled = styled.div`
display: flex;

.profile-info{
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 100vh;
    background-color: aliceblue;
    .heading{
        h2{
            text-align: center;
            border-bottom: solid black 1px;
            padding: 0 0 10px 0;
        }
    }
    .profile-icon{
        display: flex;
        flex-direction: column;
        svg{
            font-size: 100px;
            margin: 10px auto ;
        }
        h4{
            text-align: center;
        }
    }
    .basic-info{
        padding: 30px;
        .email{
            margin: 0 0 25px 0;
            h4{
                margin: 0 0 5px 0;
            }
        }
        .phone{
            h4{
                margin: 0 0 5px 0;
            }
        }
    }

    .actions{
        display: flex;
        padding: 10px;
        flex-direction: column;
        justify-content: space-around;
        .edit-profile{
            display: flex;
            margin: 10px;
            button{
            margin: auto;
            background-color: green;
            padding: 3px 5px;
            color: #fff;
            border-radius: 4px;
            border: none;
            cursor: pointer;
            :hover{
                background-color: lightgreen;
                color: #000;
            }
        }
        }
        
        
        
    }

    .logout{
        display: flex;
        bottom: 0px;
        position: absolute;
        margin: 10px;
            button{
            margin: auto;
            background-color: #ef0101;
            border: none;
            padding: 5px 10px;
            border-radius: 20px;
            color: #fff;
            cursor: pointer;
            :hover{
                background-color:  #ef0101e6;
                color: #000;
            }
        }
        }
}

.task-info{
    width: -webkit-fill-available;;
    display: flex;
    background-color: #0001;
    height: 100vh;
    flex-direction: column;

    .navigation{
        display: flex;
        flex-direction: column;
        height: 150px;
        background-color: #0041cd26;
        /* box-shadow: #0041cd7a 0px 0px 20px 0px; */
        box-shadow: inset rgb(195 195 195) 0px 0px 20px 20px;
        .task-heading{
                margin: auto;
        }
    }

    .add-or-completed{
        display: flex;
        padding: 10px;
        justify-content: space-between;
        .add{
            button{
                background-color: darkgreen;
                color: #fff;
                padding: 7px 10px;
                border: none;
                border-radius: 12px 0 12px 0;
                cursor: pointer;
                margin-left: 11px;
            }
        }
        .completed{
            button{
                background-color: goldenrod;
                color: #fff;
                padding: 7px 10px;
                border: none;
                border-radius: 12px 0 12px 0;
                cursor: pointer;
                margin-right: 11px;
            }
        }
    }
    .task-container{
        overflow: scroll;
        ::-webkit-scrollbar{
            display: none;
        }
        .task{ 
            /* height: 100px; */
            background-color: white;
            margin: 20px;
            border-radius: 5px;
            box-shadow: #80808087 0px 0px 20px 0px;
            display: flex;
            /* justify-content: space-between; */
            .date-time{
                display: flex;
                margin: 5px;
                flex-direction: column;
                padding: 15px;
                border-radius: 20px;
                /* border-right: solid gray 1px; */
                width: 150px;
                background-color: rgb(57 147 171 / 53%);
                h6{
                    text-align: center;
                    text-transform: uppercase;
                }
                span{
                    /* text-align: center; */
                    /* margin: auto 10px; */
                    font-size: 12px;
                }
            }
            .task-content{
                width: -webkit-fill-available;
                padding: 15px;
                display: flex;
                flex-direction: column;
                h5{
                    /* text-align: center; */
                    /* border-bottom: solid #000 1px; */
                    text-transform: uppercase;
                }
                span{
                    /* margin: auto; */
                }
            }
            .task-actions{
               /* display: flex;
               flex-direction: column;
                margin: 5px;
                border-radius: 20px;
                padding: 10px;
                border-left: solid gray 1px;
                background-color: #d1d1d1; */
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin: 5px;
                border-radius: 20px;
                padding: 10px;
                .edit{
                    margin: 5px auto ;
                    padding: 5px 10px;
                    border-radius: 10px;
                    display: block;
                    border: none;
                    background: green;
                    color: #fff;
                }
                .complete{
                    margin: 5px auto ;
                    padding: 5px 10px;
                    border-radius: 10px;
                    display: block;
                    border: none;
                    background: #20dac4;
                    color: #000;
                }
                .delete{
                    margin: 5px auto ;
                    padding: 5px 10px;
                    border-radius: 10px;
                    display: block;
                    border: none;
                    background: red;
                    color: #fff;
                }
            }
        }
    }
}

.outerModal{
    background-color: #ffffff6e;
    .modal-body{
    .task-container{
        overflow: scroll;
        ::-webkit-scrollbar{
            display: none;
        }
        .task{ 
            /* height: 100px; */
            background-color: white;
            margin: 20px;
            border-radius: 5px;
            box-shadow: #80808087 0px 0px 20px 0px;
            display: flex;
            /* justify-content: space-between; */
            .date-time{
                display: flex;
                margin: 5px;
                flex-direction: column;
                padding: 15px;
                /* border-radius: 20px; */
                border-right: solid gray 1px;
                width: 150px;
                /* background-color: rgb(57 147 171 / 53%); */
                h6{
                    text-align: center;
                    text-transform: uppercase;
                }
                span{
                    /* text-align: center; */
                    /* margin: auto 10px; */
                    font-size: 12px;
                }
            }
            .task-content{
                width: -webkit-fill-available;
                padding: 15px;
                display: flex;
                flex-direction: column;
                h5{
                    /* text-align: center; */
                    /* border-bottom: solid #000 1px; */
                    text-transform: uppercase;
                }
                span{
                    /* margin: auto; */
                }
            }
            .task-actions{
               display: flex;
               flex-direction: column;
                margin: 5px;
                border-radius: 20px;
                padding: 10px;
                border-left: solid gray 1px;
                background-color: #d1d1d1;
                .edit{
                    margin: 5px auto ;
                    padding: 5px 10px;
                    border-radius: 10px;
                    display: block;
                    border: none;
                    background: green;
                    color: #fff;
                }
                .complete{
                    margin: 5px auto ;
                    padding: 5px 10px;
                    border-radius: 10px;
                    display: block;
                    border: none;
                    background: #20dac4;
                    color: #000;
                }
                .delete{
                    margin: 5px auto ;
                    padding: 5px 10px;
                    border-radius: 10px;
                    display: block;
                    border: none;
                    background: red;
                    color: #fff;
                }
            }
        }
    }
}
}

@media screen and (max-width: 900px) {
    flex-direction: column;
    .profile-info{
        height: 100%;
        display: block;
        width: 100%;
        .logout{
            bottom: auto;
            position: unset;
        }
    }

    .task{
        flex-direction: column;
        
    }
    .task-actions{
            flex-direction: row !important;
    }
  }

`;