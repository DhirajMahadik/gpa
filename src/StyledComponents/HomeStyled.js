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
            margin: auto;
        }
        h3{
            text-align: center;
        }
    }
    .basic-info{
        padding: 30px;
        .email{
            margin: 0 0 25px 0;
            h3{
                margin: 0 0 5px 0;
            }
        }
        .phone{
            h3{
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
        height: 200px;
        background-color: #0041cd26;
        /* box-shadow: #0041cd7a 0px 0px 20px 0px; */
        box-shadow: inset rgb(195 195 195) 0px 0px 20px 20px;
        .task-heading{
                margin: auto;
        }
    }
    .task-container{
        overflow: scroll;
        ::-webkit-scrollbar{
            display: none;
        }
        .task{ 
            height: 100px;
            background-color: white;
            margin: 20px;
            border-radius: 5px;
            box-shadow: #80808087 0px 0px 20px 0px;
            display: flex;
            .date-time{
                display: flex;
                span{
                    margin: auto 10px;
                }
            }
            .task-content{
                padding: 15px;
            }
            .task-actions{
                padding: 10px;
                button{
                    margin: 5px;
                }
            }
        }
    }
}
`;