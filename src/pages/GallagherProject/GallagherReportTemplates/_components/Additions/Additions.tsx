import { View, Text } from "@react-pdf/renderer";
import styles_additions from "./styles";

const {
  container,
  header_container,
  header_text,
  content_wrapper,
  item_wrapper,
  table_text,
  input_container,
  underlined_long,
} = styles_additions;

const Additions = () => {
  return (
    <View style={container}>
      {/* HEADER */}
      <View style={header_container}>
        <Text style={header_text}>{`Additions:`}</Text>
      </View>

      {/* Miscellaneous Additional Features */}
      <View style={[input_container, { paddingTop: 3 }]}>
        <View style={item_wrapper}>
          <Text
            style={header_text}
          >{`Miscellaneous Additional Features:  `}</Text>
        </View>
      </View>

      {/*  */}
      <View style={content_wrapper}>
        <View style={input_container}>
          <View style={item_wrapper}>
            <Text style={table_text}>{`Stained Glass Windows:  `}</Text>
          </View>

          <View style={item_wrapper}>
            <Text style={table_text}>{`$`}</Text>
            <View style={underlined_long}></View>
          </View>
        </View>
      </View>
      {/*  */}

      {/*  */}
      <View style={content_wrapper}>
        <View style={input_container}>
          <View style={item_wrapper}>
            <Text style={table_text}>{`Others:  `}</Text>
          </View>

          <View style={item_wrapper}>
            <Text style={table_text}>{`$`}</Text>
            <View style={underlined_long}></View>
          </View>
        </View>
      </View>
      {/*  */}

      {/*  */}
      <View style={content_wrapper}>
        <View style={input_container}>
          <View style={item_wrapper}>
            <Text style={table_text}>{`Others:  `}</Text>
          </View>

          <View style={item_wrapper}>
            <Text style={table_text}>{`$`}</Text>
            <View style={underlined_long}></View>
          </View>
        </View>
      </View>
      {/*  */}

      {/* Equipment */}
      <View style={input_container}>
        <View style={item_wrapper}>
          <Text style={header_text}>{`Equipment:  `}</Text>
        </View>
      </View>

      {/*  */}
      <View style={content_wrapper}>
        <View style={input_container}>
          <View style={item_wrapper}>
            <Text style={table_text}>{`Church Equipment:  `}</Text>
          </View>

          <View style={item_wrapper}>
            <Text style={table_text}>{`$`}</Text>
            <View style={underlined_long}></View>
          </View>
        </View>
      </View>
      {/*  */}

      {/*  */}
      <View style={content_wrapper}>
        <View style={input_container}>
          <View style={item_wrapper}>
            <Text style={table_text}>{`Security Cameras:  `}</Text>
          </View>

          <View style={item_wrapper}>
            <Text style={table_text}>{`$`}</Text>
            <View style={underlined_long}></View>
          </View>
        </View>
      </View>
      {/*  */}

      {/*  */}
      <View style={content_wrapper}>
        <View style={input_container}>
          <View style={item_wrapper}>
            <Text style={table_text}>{`Walk-in Cooler(s):  `}</Text>
          </View>

          <View style={item_wrapper}>
            <Text style={table_text}>{`$`}</Text>
            <View style={underlined_long}></View>
          </View>
        </View>
      </View>
      {/*  */}

      {/*  */}
      <View style={content_wrapper}>
        <View style={input_container}>
          <View style={item_wrapper}>
            <Text style={table_text}>{`Walk-in Freezer(s):  `}</Text>
          </View>

          <View style={item_wrapper}>
            <Text style={table_text}>{`$`}</Text>
            <View style={underlined_long}></View>
          </View>
        </View>
      </View>
      {/*  */}

      {/*  */}
      <View style={content_wrapper}>
        <View style={input_container}>
          <View style={item_wrapper}>
            <Text style={table_text}>{`Backup Generator___kW:  `}</Text>
          </View>

          <View style={item_wrapper}>
            <Text style={table_text}>{`$`}</Text>
            <View style={underlined_long}></View>
          </View>
        </View>
      </View>
      {/*  */}

      {/*  */}
      <View style={content_wrapper}>
        <View style={input_container}>
          <View style={item_wrapper}>
            <Text style={table_text}>{`Pipe Organ:  `}</Text>
          </View>

          <View style={item_wrapper}>
            <Text style={table_text}>{`$`}</Text>
            <View style={underlined_long}></View>
          </View>
        </View>
      </View>
      {/*  */}

      {/*  */}
      <View style={content_wrapper}>
        <View style={input_container}>
          <View style={item_wrapper}>
            <Text style={table_text}>{`Kitchen Equipments:  `}</Text>
          </View>

          <View style={item_wrapper}>
            <Text style={table_text}>{`$`}</Text>
            <View style={underlined_long}></View>
          </View>
        </View>
      </View>
      {/*  */}

      {/*  */}
      <View style={content_wrapper}>
        <View style={input_container}>
          <View style={item_wrapper}>
            <Text style={table_text}>{`Others:  `}</Text>
          </View>

          <View style={item_wrapper}>
            <Text style={table_text}>{`$`}</Text>
            <View style={underlined_long}></View>
          </View>
        </View>
      </View>
      {/*  */}

      {/*  */}
      <View style={content_wrapper}>
        <View style={input_container}>
          <View style={item_wrapper}>
            <Text style={table_text}>{`Others:  `}</Text>
          </View>

          <View style={item_wrapper}>
            <Text style={table_text}>{`$`}</Text>
            <View style={underlined_long}></View>
          </View>
        </View>
      </View>
      {/*  */}

      {/*  */}
      <View style={content_wrapper}>
        <View style={input_container}>
          <View style={item_wrapper}>
            <Text style={table_text}>{`Others:  `}</Text>
          </View>

          <View style={item_wrapper}>
            <Text style={table_text}>{`$`}</Text>
            <View style={underlined_long}></View>
          </View>
        </View>
      </View>
      {/*  */}

      {/*  */}
      <View style={content_wrapper}>
        <View style={input_container}>
          <View style={item_wrapper}>
            <Text style={table_text}>{`Others:  `}</Text>
          </View>

          <View style={item_wrapper}>
            <Text style={table_text}>{`$`}</Text>
            <View style={underlined_long}></View>
          </View>
        </View>
      </View>
      {/*  */}

      {/* Building Items */}
      <View style={input_container}>
        <View style={item_wrapper}>
          <Text style={header_text}>{`Building Items:  `}</Text>
        </View>
      </View>

      {/*  */}
      <View style={content_wrapper}>
        <View style={input_container}>
          <View style={item_wrapper}>
            <Text
              style={table_text}
            >{`Covered Area(Entry, Walkway, Carport):  `}</Text>
          </View>

          <View style={item_wrapper}>
            <Text style={table_text}>{`$`}</Text>
            <View style={underlined_long}></View>
          </View>
        </View>
      </View>
      {/*  */}

      {/*  */}
      <View style={content_wrapper}>
        <View style={input_container}>
          <View style={item_wrapper}>
            <Text style={table_text}>{`Mezzanine:  `}</Text>
          </View>

          <View style={item_wrapper}>
            <Text style={table_text}>{`$`}</Text>
            <View style={underlined_long}></View>
          </View>
        </View>
      </View>
      {/*  */}

      {/*  */}
      <View style={content_wrapper}>
        <View style={input_container}>
          <View style={item_wrapper}>
            <Text style={table_text}>{`Exterior Stairs:  `}</Text>
          </View>

          <View style={item_wrapper}>
            <Text style={table_text}>{`$`}</Text>
            <View style={underlined_long}></View>
          </View>
        </View>
      </View>
      {/*  */}

      {/*  */}
      <View style={content_wrapper}>
        <View style={input_container}>
          <View style={item_wrapper}>
            <Text style={table_text}>{`Others:  `}</Text>
          </View>

          <View style={item_wrapper}>
            <Text style={table_text}>{`$`}</Text>
            <View style={underlined_long}></View>
          </View>
        </View>
      </View>
      {/*  */}

      {/*  */}
      <View style={content_wrapper}>
        <View style={input_container}>
          <View style={item_wrapper}>
            <Text style={table_text}>{`Others:  `}</Text>
          </View>

          <View style={item_wrapper}>
            <Text style={table_text}>{`$`}</Text>
            <View style={underlined_long}></View>
          </View>
        </View>
      </View>
      {/*  */}

      {/*  */}
      <View style={content_wrapper}>
        <View style={input_container}>
          <View style={item_wrapper}>
            <Text style={table_text}>{`Others:  `}</Text>
          </View>

          <View style={item_wrapper}>
            <Text style={table_text}>{`$`}</Text>
            <View style={underlined_long}></View>
          </View>
        </View>
      </View>
      {/*  */}

      {/*  */}
      <View style={content_wrapper}>
        <View style={input_container}>
          <View style={item_wrapper}>
            <Text style={table_text}>{`Others:  `}</Text>
          </View>

          <View style={item_wrapper}>
            <Text style={table_text}>{`$`}</Text>
            <View style={underlined_long}></View>
          </View>
        </View>
      </View>
      {/*  */}

      {/*  */}
      <View style={content_wrapper}>
        <View style={input_container}>
          <View style={item_wrapper}>
            <Text style={table_text}>{`Others:  `}</Text>
          </View>

          <View style={item_wrapper}>
            <Text style={table_text}>{`$`}</Text>
            <View style={underlined_long}></View>
          </View>
        </View>
      </View>
      {/*  */}
    </View>
  );
};

export default Additions;
