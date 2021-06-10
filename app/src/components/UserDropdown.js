<Form>
                  <Form.Group controlId="formBasicPassword">
                    <Dropdown>
                      <Dropdown.Toggle variant="light" block>
                        {this.state.name ? this.state.name : "Login in As"}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {Object.keys(this.props.users).map((user) => {
                          return (
                            <div
                              key={this.props.users[user].id}
                              style={{ display: "block" }}
                            >
                              <Dropdown.Item
                                onClick={(e) =>
                                  this.changeValue(
                                    e.target.textContent,
                                    this.props.users[user].id
                                  )
                                }
                              >
                                <Image
                                  style={{
                                    width: "2rem",
                                    pointerEvents: "none",
                                  }}
                                  size="xs"
                                  src={this.props.users[user].avatarURL}
                                  roundedCircle
                                />
                                {"  "}
                                {this.props.users[user].name}
                              </Dropdown.Item>
                            </div>
                          );
                        })}
                      </Dropdown.Menu>
                    </Dropdown>
                  </Form.Group>{" "}