// Copyright (c) YugaByte, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
// in compliance with the License.  You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License
// is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
// or implied.  See the License for the specific language governing permissions and limitations
// under the License.

// Utilities to be used in the main() function.

#ifndef YB_UTIL_MAIN_UTIL_H
#define YB_UTIL_MAIN_UTIL_H

#include <cstdlib>

#include "yb/util/result.h"
#include "yb/util/status.h"

namespace yb {

// If the given status is not OK, log or print the status and return from the main() function.
#define LOG_AND_RETURN_FROM_MAIN_NOT_OK(status) do { \
    auto&& _status = (status); \
    if (!_status.ok()) { \
      LogOrPrintStatus(_status); \
      return EXIT_FAILURE; \
    } \
  } while (false)

// Log the given status.
void LogOrPrintStatus(const Status& status);

template<class T>
void LogOrPrintStatus(const Result<T>& result) {
  LogOrPrintStatus(result.status());
}

} // namespace yb

#endif // YB_UTIL_MAIN_UTIL_H
