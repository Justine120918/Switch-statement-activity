let day = prompt("Enter a day of the week:");

day = day.toLowerCase();

switch (day) {
  case "monday":
      console.log("Your task for Monday is: Finish your assignments.");
          break;
            case "tuesday":
                console.log("Your task for Tuesday is: Attend team meeting.");
                    break;
                      case "wednesday":
                          console.log("Your task for Wednesday is: Work on project.");
                              break;
                                case "thursday":
                                    console.log("Your task for Thursday is: Review notes.");
                                        break;
                                          case "friday":
                                              console.log("Your task for Friday is: Complete your reading.");
                                                  break;
                                                    case "saturday":
                                                        console.log("Your task for Saturday is: Plan for next week.");
                                                            break;
                                                              case "sunday":
                                                                  console.log("Your task for Sunday is: Rest and recharge.");
                                                                      break;
                                                                        default:
                                                                            console.log("Invalid input. Please enter a valid day of the week.");
                                                                            }
