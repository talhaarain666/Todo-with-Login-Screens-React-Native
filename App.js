import React, { useState } from 'react';
import { Button, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [inputVal, setInputVal] = useState("");
  const [li, setLi] = useState([]);


  let addTodo = () => {
    setInputVal("")
    if (!inputVal) {

    }
    if (inputVal) {
      setLi([...li, inputVal])
      setInputVal("");
    }
    
  }

  let deleteTodo = (id) => {
    const updatedItems = li.filter((elem, ind) => {
      return ind != id;
    })
    setLi(updatedItems);
  }
  let editTodo = (val, index) => {
    let newEditItems = 
    setInputVal(val)
    
  }


  return <>


    <View style={{ flex: 1, maxHeight: 60, justifyContent: 'space-between', flexDirection: "row", padding: 8 }}>

      <TextInput style={{ flex: 4 }} value={inputVal} placeholder='Enter Text' onChangeText={(e) => setInputVal(e)} />
      <Pressable style={{ flex: 1, backgroundColor: "darkgrey", justifyContent: "center" }} onPress={addTodo}>
        <Text style={{ color: "black", textAlign: "center", fontWeight: "bold" }}
        >
          Add
        </Text>
      </Pressable>
      <TouchableOpacity style={{ flex: 1, backgroundColor: "#8B0000", justifyContent: "center" }} onPress={() => setLi("")}>
        <Text style={{ color: "white", textAlign: "center" }}
        >
          Delete ALL
        </Text>
      </TouchableOpacity>

    </View>


    <ScrollView style={{ padding: 10 }}>

      <View style={{ flex: 8 }}>
        {li ? li.map((e, i) => {
          return <>
            <View key={i} style={{ flex: 1, padding: 3, flexDirection: "row" }}>
              <Text style={{ flex: 5 }}>{e}</Text>
              <Button style={{ flex: 2 }}
                onPress={() => editTodo(e, i)}
                title="Edit"
                color="#696969"
              />
              <Button style={{ flex: 2 }}
                onPress={() => deleteTodo(i)}
                title="Delete"
                color="#8B0000"
              />
            </View>
          </>
        }) : ""}
      </View>
    </ScrollView>



  </>

}

// .......................LOGIN SCREEN 1.................

// export default function App() {

//   return <>
//     <ScrollView >
//       <View style={{ padding: 30, flex: 1, backgroundColor: "#191a1f", alignItems: "center" }}>
//         <View>
//           <Text style={{ fontWeight: "bold", marginVertical: 20, fontSize: 22 }}>Welcome Back!</Text>
//         </View>
//         <View>
//           <Text style={{ color: "grey", marginBottom: 50 }}>Please sign in to your account</Text>
//         </View>
//         <View style={{ width: "100%" }}>
//           <TextInput style={{ backgroundColor: "#262a35", borderRadius: 20, padding: 22, margin: 5 }} placeholder='Username' />
//         </View>
//         <View style={{ width: "100%" }}>
//           <TextInput style={{ backgroundColor: "#262a35", borderRadius: 20, padding: 22, margin: 5 }} placeholder='Password' />
//         </View>
//         <View style={{ marginBottom: 60 }}>
//           <Text>Forgot Password?</Text>
//         </View>

//         <TouchableOpacity style={{ width: "100%", backgroundColor: "#5567ff", borderRadius: 20, padding: 22, margin: 8 }}>
//           <Text style={{ textAlign: "center" }}>
//             Sign In
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={{ width: "100%", backgroundColor: "#ffffff", borderRadius: 20, padding: 10, margin: 8 }}>
//           <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
//             <Image
//               source={require("./imgs/1.png")}
//             />
//             <Text style={{ color: "black", marginLeft: 5, textAlign: "center" }}>
//               Sign In With Google
//             </Text>
//           </View>
//         </TouchableOpacity>
//         <TouchableOpacity style={{ width: "100%", backgroundColor: "#3a579b", borderRadius: 20, padding: 10, margin: 8 }}>
//           <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
//             <Image
//               source={require("./imgs/2.png")}
//             />
//             <Text style={{ marginLeft: 5, textAlign: "center" }}>
//               Sign In With Facebook
//             </Text>
//           </View>
//         </TouchableOpacity>

//         <View style={{ marginTop: 20 }}>
//           <Text>Don't Have An Account ? Sign Up</Text>
//         </View>
//       </View>



//       <View style={{ borderWidth: 50, borderColor: "black" }}><Text style={{ textAlign: "center", fontSize: 25 }}>2</Text></View>



//       <View style={{ backgroundColor: "#ffffff", flex: 1, padding: 20 }}>

//         <Image style={{ width: 70, marginHorizontal: "35%", marginBottom: 40 }} source={require("./imgs/3.jpg")} />
//         <View>
//           <Text style={{ fontSize: 22, color: "black", marginVertical: 20 }}>Welcome!</Text>
//         </View>
//         <View style={{ width: "100%" }}>
//           <TextInput style={{ backgroundColor: "#edeff3", color: "black", borderRadius: 20, padding: 22, marginVertical: 5 }} placeholder='Email' />
//         </View>
//         <View style={{ width: "100%" }}>
//           <TextInput style={{ backgroundColor: "#edeff3", color: "black", borderRadius: 20, padding: 22, marginVertical: 5 }} placeholder='Password' />
//         </View>

//         <TouchableOpacity style={{ width: "100%", backgroundColor: "#ff5b2d", borderRadius: 20, padding: 22, marginVertical: 20 }}>
//           <Text style={{ textAlign: "center" }}>
//             Login
//           </Text>
//         </TouchableOpacity>

//         <View >
//           <Text style={{ color: "#ff5b2d", marginVertical: 40, textAlign: "center" }}>Forgot Password?</Text>
//         </View>

//         <View style={{ flexDirection: "row", justifyContent: "space-around" }}>

//           <TouchableOpacity style={{ borderColor: "lightgrey", borderWidth: 0.8, borderRadius: 20, paddingVertical: 1, paddingHorizontal: 20, margin: 8 }}>
//             <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
//               <Image
//                 source={require("./imgs/1.png")}
//               />
//               <Text style={{ marginLeft: 5, textAlign: "center", color: "#ff5b2d" }}>
//                 Google
//               </Text>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity style={{ borderColor: "lightgrey", borderWidth: 0.8, borderRadius: 20, paddingVertical: 1, paddingHorizontal: 20, margin: 8 }}>
//             <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
//               <Image
//                 source={require("./imgs/2.png")}
//               />
//               <Text style={{ marginLeft: 5, textAlign: "center", color: "#45639f" }}>
//                 Facebook
//               </Text>
//             </View>
//           </TouchableOpacity>
//         </View>

//         <View>
//           <Text style={{ textAlign: "center", color: "grey", marginVertical: 20 }}>
//             Don't have an account? Sign Up
//           </Text>
//         </View>

//       </View>



//       <View style={{ borderWidth: 50, borderColor: "black" }}><Text style={{ textAlign: "center", fontSize: 25 }}>3</Text></View>



//       <View style={{ backgroundColor: "#00344d", flex: 1, padding: 20, paddingTop: 100 }} >

//         <View>
//           <Text style={{ fontSize: 34, textAlign: "center", fontWeight: "bold", color: "#fb5b5a", marginVertical: 30 }}>Hey App</Text>
//         </View>
//         <View style={{ width: "100%" }}>
//           <TextInput style={{ backgroundColor: "#465881", color: "white", borderRadius: 100, padding: 20, marginVertical: 10 }} placeholder='Email...' />
//         </View>
//         <View style={{ width: "100%" }}>
//           <TextInput style={{ backgroundColor: "#465881", color: "white", borderRadius: 100, padding: 20, marginVertical: 10 }} placeholder='Password...' />
//         </View>
//         <View >
//           <Text style={{ color: "white", marginVertical: 20, textAlign: "center" }}>Forgot Password?</Text>
//         </View>

//         <TouchableOpacity style={{ width: "100%", backgroundColor: "#ff5b2d", borderRadius: 100, padding: 22, marginTop: 20 }}>
//           <Text style={{ fontWeight: "bold", textAlign: "center" }}>
//             LOGIN
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={{ width: "100%", backgroundColor: "transparent", borderRadius: 100, padding: 22, marginBottom: 20 }}>
//           <Text style={{ fontWeight: "bold", textAlign: "center" }}>
//             Signup
//           </Text>
//         </TouchableOpacity>
//       </View>


//       <View style={{ borderWidth: 50, borderColor: "black" }}><Text style={{textAlign:"center",fontSize:25}}>4</Text></View>


//       <View style={{ backgroundColor: "#FFFFFF", flex: 1, padding: 20 }}>
//         <View style={{ borderColor: "#dcddde", borderWidth: 2, padding: 15 }}>
//           <Image style={{ width: 100, marginHorizontal: "35%", marginBottom: 40 }} source={require("./imgs/4.png")} />
//           <View style={{ flexDirection: "row" }}>
//             <View style={{ flex: 1, borderBottomColor: "yellow", borderBottomWidth: 2 }}>
//               <Text style={{ color: "#ffcf00", marginBottom: 5, fontWeight: "bold" }}>LOGIN</Text>
//             </View>
//             <View style={{ flex: 1, borderBottomColor: "lightgrey", borderBottomWidth: 2 }}>
//               <Text style={{ color: "lightgrey", marginBottom: 5, fontWeight: "bold" }}>SIGNUP</Text>
//             </View>
//           </View>

//           <TouchableOpacity style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%", backgroundColor: "#363636", borderRadius: 10, marginTop: 20 }}>
//             <View style={{ flex: 1, backgroundColor: "#262626", padding: 15 }}>
//               <Image
//                 source={require("./imgs/5.png")}
//               />
//             </View>
//             <View style={{ flex: 7 }}>
//               <Text style={{ textAlign: "center" }}>
//                 Log in with Github
//               </Text>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%", backgroundColor: "#5c64f9", borderRadius: 10, marginTop: 12 }}>
//             <View style={{ flex: 1, backgroundColor: "#4046ae", padding: 15 }}>
//               <Image style={{ color: "white" }}
//                 source={require("./imgs/6.png")}
//               />
//             </View>
//             <View style={{ flex: 7 }}>
//               <Text style={{ textAlign: "center" }}>
//                 Log in with Google
//               </Text>
//             </View>
//           </TouchableOpacity>

//           <Text style={{ color: "grey", marginVertical: 25, textAlign: "center", fontSize: 18 }}>OR</Text>

//           <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%", borderColor: "lightgrey", borderWidth: 1, borderRadius: 5 }}>
//             <View style={{ flex: 1, backgroundColor: "#f1f1f1", padding: 15, borderBottomLeftRadius: 5, borderTopLeftRadius: 5, borderRightColor: "lightgrey", borderRightWidth: 1 }}>
//               <Image
//                 source={require("./imgs/8.png")}
//               />
//             </View>
//             <View style={{ flex: 7 }}>
//               <TextInput style={{ borderRadius: 0, color: "black" }} placeholderTextColor={"lightgrey"} placeholder='Yours@emaple.com' />
//             </View>
//           </View>
//           <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%", borderColor: "lightgrey", borderWidth: 1, borderRadius: 5, marginTop: 12 }}>
//             <View style={{ flex: 1, backgroundColor: "#f1f1f1", padding: 15, borderBottomLeftRadius: 5, borderTopLeftRadius: 5, borderRightColor: "lightgrey", borderRightWidth: 1 }}>
//               <Image
//                 source={require("./imgs/7.png")}
//               />
//             </View>
//             <View style={{ flex: 7, color: "black" }}>
//               <TextInput style={{ borderRadius: 0, color: "black" }} placeholder='Password' placeholderTextColor={"lightgrey"} />
//             </View>
//           </View>

//           <View >
//             <Text style={{ color: "#ffcf00", marginTop: 30, marginBottom: 5 }}>Don't remember your Password?</Text>
//           </View>

//           <TouchableOpacity style={{ width: "100%", backgroundColor: "#ffcf00", borderRadius: 10, marginTop: 12, padding: 20 }}>
//             <Text style={{ textAlign: "center", fontWeight: "bold", color: "black" }}>
//               LOGIN
//             </Text>
//           </TouchableOpacity>

//         </View>
//       </View>
//     </ScrollView>
//   </>

// }


