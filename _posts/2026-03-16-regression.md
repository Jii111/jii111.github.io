---
layout: post
title: "회귀 분석"
date: 2026-03-16 00:00:00
description: "단순선형회귀부터 다중선형회귀, 잔차분석, 모형 선택까지 핵심 정리"
tags: [statistics, regression, 회귀분석, ANOVA]
categories: study_notes
math: true
---

<style>
.post-title {
  font-weight: 700;
}

.post-content h2 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  border-left: 4px solid #222;
  background: none;
  padding: 0.3em 0.7em;
  color: #222;
}

.post-content h3,
.post-content h4,
.post-content p,
.post-content li,
.post-content td,
.post-content th {
  font-size: 0.95rem;
  font-weight: 400;
}

.post-content h3 {
  font-weight: 600;
}

.post-content blockquote {
  border-left: none;
  background: none;
  padding: 0;
  margin: 0.3em 0;
  font-size: 0.95rem;
}

.post-content blockquote p {
  margin-bottom: 0;
}
</style>

## Chap 1. Linear Regression with One Variable

X와 Y의 관계를 함수적으로 표현.

**최소 제곱법**: $$Q(b_0, b_1) = \sum_i (Y_i - (b_1 X_i + b_0))^2$$ 최소화.

- $$b_0$$: $$x = 0$$일 때 준비해야 할 평균 변화
- $$b_1$$: $$x$$가 한 단위 증가할 때 평균 증가

Q를 최소화하는 값을 미분하여 $$b_0, b_1$$ 값 도출 → **정규 방정식** 이용.

> **Gauss-Markov Theorem**: Under the conditions of regression model, the least squares estimators $$b_0$$ and $$b_1$$ are unbiased and have minimum variance among all unbiased linear estimators.

**잔차**: $$e_i = Y_i - \hat{Y}_i$$

### Normal Error Regression Model

**Likelihood**: 관측된 사건이 고정된 상태에서, 확률 분포가 변화될 때(= 확률 분포를 모를 때 = 가정할 때) 확률.

The probability of the observed data considered as a function of unknown parameters → **Maximum Likelihood**.

---

## Chap 2. Inferences in Regression and Correlation Analysis

**Statistical Inference**: critical value나 p-value로 검정.

**$$\beta_1$$에 대한 신뢰구간**:

$$b_1 \pm t\!\left(1 - \frac{\alpha}{2}\right) \cdot s(b_1)$$

$$t(n-2)$$로 검정.

### Prediction of New Observations

변동성과 불확실성 더 크게 포함.

- **분포의 평균 예측**: Y가 어떤 경향성을 보이는지에 대한 전반적인 이해와 예측 → 신뢰구간에 z분포 사용
- **새로운 관측값 예측**: $$\sigma^2(\text{pred}) = \sigma^2(Y_h - \hat{Y}_h)$$ → 새로운 관측값에 대한 불확실성을 평가하기 위해

### ANOVA

**기본 개념**: "전체 변동량(SSTO)을 모델로 설명되는 변동량(SSR)과 잔차 변동량(SSE)로 분할하는 것."

| 항목 | 정의 | df |
|------|------|----|
| SSTO | $$\sum(y_i - \bar{y})^2$$ | $$n - 1$$ |
| SSR | $$\sum(\hat{y}_i - \bar{y})^2$$ | $$1$$ |
| SSE | $$\sum(y_i - \hat{y}_i)^2$$ | $$n - 2$$ |

$$\text{SSTO} = \text{SSR} + \text{SSE}$$

$$F = \frac{MSR}{MSE} \sim F(p-1,\, n-p) \text{ under } H_0$$

**결정계수**: $$R^2 = \frac{SS_R}{SS_T} = 1 - \frac{SS_E}{SS_T}$$

---

## Chap 3. Diagnostics and Remedial Measures

**Model assumptions**:
- **linearity**: 선형 회귀의 경우, 잔차 분석 (잔차가 랜덤하게 분포하는지)
- **homogeneity**: 일정한 분산
- **independence**: 데이터가 자기상관 없어야 함
- **normality**: 모델의 오차 정규 분포, Q-Q plot

$$e_i = Y_i - \hat{Y}_i, \quad E(e_i) = 0, \quad \text{Var}(e_i) = MSE$$

But, NOT independent → 잔차 분석을 통해 모델 가정이 위배되는지 확인해야 함.

**Tests for Homogenious Variance**:
- Brown-Forsythe Test (그룹의 중앙값 이용)
- Breusch-Pagan Test

위배된다면 → **transformation**

> Transformation of X, not of Y. Why? 오차항의 분포를 변화시킬 가능성.

- 선형성, 독립성 만족한다면 → Y transformation
- **Box-Cox transformation**: 어떤 Y의 변환이 가장 적절한가를 자동으로 찾는 방법

**F Test for Lack of Fit**: SSE의 차이 이용.

---

## Chap 5. Matrix Approach to Simple Linear Regression

$$\mathbf{Y} = \mathbf{X}\boldsymbol{\beta} + \boldsymbol{\varepsilon}$$

- **rank**: Maximum number of linearly independent columns
- **linearly dependent**: column vector들을 조합하여 0벡터를 만들 수 있다면

---

## Chap 6. Multiple Regression — 1

2차 regression, interaction effects, …

> The term "linear model" refers to the fact that model is linear in the parameters (like $$\beta_0, \beta_1, \ldots$$).

**Matrix Form**

**Adjusted $$R^2$$**: 독립 변수의 수가 늘어나면 자동으로 증가하는 경향 → 보정 필요.

**$$\beta_k$$에 대한 신뢰구간**:

$$b_k \pm t\!\left(1 - \frac{\alpha}{2}\right) \cdot s(b_k)$$

$$t(n-p)$$로 검정 (Chap 2 SLR이랑 똑같고 자유도만 바뀜).

---

## Chap 7. Multiple Regression — 2

### Extra Sum of Squares

$$SSR(X_2 \mid X_1) = SSE(X_1) - SSE(X_1, X_2)$$

$$SSTO = SSR(X_1) + SSE(X_1) = SSR(X_1) + SSR(X_2 \mid X_1) + SSE(X_1, X_2)$$

즉: X1이 이미 설명한 변동 + X1 있는 상태에서 X2가 설명하는 변동 + SSE.

$$SSR(X_1, X_2) = SSR(X_1) + SSR(X_2 \mid X_1) \Rightarrow \text{수식이 정리돼서 F 검정도 가능}$$

**$$B_k$$에 대한 검정**: t검정, F검정. 효과가 0인지 아닌지가 아니라 $$B_1 = B_2$$인지 알고 싶다면 별도 검정.

**Standardized multiple regression**: 다른 단위와 범위를 가진 변수들을 동일하게 변환.

**Multicollinearity**: uncorrelated하다면 부분 결정계수 = 0. Centering으로 avoid할 수 있음.

---

## Chap 8. Regression Models for Quantitative and Qualitative Predictors

- **Polynomial regression**: 2차 함수 형태 등
- **Interaction regression models**
- **Qualitative predictors**: (n-1)개의 dummy 변수. 함수 그래프 → parallel
- **Interaction btw Quantitative and Qualitative predictors**

---

## Chap 9. Model Selection and Validation

### Criteria for Model Selection

| 기준 | 설명 |
|------|------|
| $$SSE_p$$, $$R^2$$ | 기본 적합도 |
| Mallows' $$C_p$$ | predictor 수 고려 |
| $$AIC_p$$ | predictor 개수에 페널티. likelihood 함수와 관련 |
| $$PRESS_p$$ | Prediction Sum of Squares |

### Automatic Search Procedures

**Stepwise regression methods**:
- Forward Stepwise Selection
- Backward Selection

**Model Validation**
