export interface except {
  code: number;
  name: string;
  message: string;
  stack: Array<{
    context: {
      level: string;
      file: string;
      line: number;
      method: string;
      hostname: string;
      thread_name: string;
      timestamp: string;
    };
    format: string;
    data: {
      s: string;
    };
  }>;
}

/*
{
    "code" : 3050003,
    "name" : "eosio_assert_message_exception",
    "message" : "eosio_assert_message assertion failure",
    "stack" : [
            {
                    "context" : {
                            "level" : "error",
                            "file" : "wasm_interface.cpp",
                            "line" : 934,
                            "method" : "eosio_assert",
                            "hostname" : "",
                            "thread_name" : "thread-0",
                            "timestamp" : "2018-10-25T10:26:25.194"
                    },
                    "format" : "assertion failure with message: ${s}",
                    "data" : {
                            "s" : "refund is not available yet"
                    }
            },
            {
                    "context" : {
                            "level" : "warn",
                            "file" : "apply_context.cpp",
                            "line" : 72,
                            "method" : "exec_one",
                            "hostname" : "",
                            "thread_name" : "thread-0",
                            "timestamp" : "2018-10-25T10:26:25.194"
                    },
                    "format" : "pending console output: ${console}",
                    "data" : {
                            "console" : ""
                    }
            }
    ]
}
*/