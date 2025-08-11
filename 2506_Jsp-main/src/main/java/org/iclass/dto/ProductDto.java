package org.iclass.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@AllArgsConstructor
public class ProductDto {
  private final String pcode;
  private final String category;
  private final String pname;
  private final int price;
}
